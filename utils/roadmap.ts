import { readdir, readFile } from "node:fs/promises"
import { resolve } from "node:path"

import matter from "gray-matter"
import z from "zod"

export const featureSchema = z.object({
  data: z.object({
    title: z.string(),
    status: z.enum(["exploring", "working", "next", "released"]),
  }),
  content: z.string().trim(),
})

export async function loadRoadmap(root = process.cwd()) {
  const files = await readdir(resolve(root, "data/roadmap"))
  return Promise.all(
    files
      .filter((file) => file.endsWith(".md"))
      .map(async (file) => {
        const contents = await readFile(
          resolve(root, "data/roadmap", file),
          "utf-8"
        )
        try {
          return featureSchema.parse(matter(contents))
        } catch (err: unknown) {
          if (err instanceof z.ZodError) {
            const issues = err.issues.reduce(
              (acc, issue) =>
                acc + `- [${issue.path.join(".")}]: ${issue.message}\n`,
              ""
            )
            throw new Error(`Invalid feature ${file}:\n${issues}`)
          }
          throw new Error(`Invalid feature ${file}: ${err}`)
        }
      })
  )
}

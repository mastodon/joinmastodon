import * as dotenv from "dotenv"
import { LinearClient } from "@linear/sdk"
import fs from "fs"

dotenv.config({ path: ".env.local" })

const api = new LinearClient({
  apiKey: process.env.LINEAR_API_KEY,
})

const fetchIssues = async (after) => api.issues({
  filter: {
    team: {
      key: {
        in: ["MAS", "IOS", "AND"],
      },
    },

    state: {
      type: {
        in: [
          "backlog",
          "unstarted",
          "started",
        ],
      },
    },
  },
})

const processIssues = async (stateMap, issues) => {
  for (const issue of issues.nodes) {
    const state = await issue.state
    const list  = (stateMap[state.type] || { items: [] }).items

    if (list.find(item => item.id === issue.identifier)) {
      continue
    }

    list.push({
      id: issue.identifier,
      title: issue.title,
      priority: issue.priority,
    })

    stateMap[state.type] = {
      type: state.type,
      items: list,
    }
  }
}

const stateMap = {}
const roadmap = []

let issues = await fetchIssues()
await processIssues(stateMap, issues)

while (issues.pageInfo.hasNextPage) {
  issues = await issues.fetchNext()
  await processIssues(stateMap, issues)
}

Object.keys(stateMap).forEach(state => {
  stateMap[state].items.sort((a, b) => a.priority - b.priority)
  roadmap.push(stateMap[state])
})

const stateTypeToValue = type => {
  switch(type) {
    case "backlog":
      return 0
    case "unstarted":
      return 1
    case "started":
      return 2
  }
}

roadmap.sort((a, b) => stateTypeToValue(b.type) - stateTypeToValue(a.type))

fs.writeFile(
  "./data/linear.json",
  JSON.stringify(roadmap, null, "  "),
  (err) => {
    if (err) {
      console.error(err)
      return
    }

    console.log("File updated")
  }
)

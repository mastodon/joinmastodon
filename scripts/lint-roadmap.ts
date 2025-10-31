import { loadRoadmap } from "../utils/roadmap"

async function main() {
  const features = await loadRoadmap()
  console.log(`Validated ${features.length} features from the roadmap.`)
}

main()
  .then(() => process.exit())
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })

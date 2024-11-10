import { CodegenConfig } from "@graphql-codegen/cli"

const testSymbiotic =
  "https://api.goldsky.com/api/public/project_cm1jo0v0u5zrv01vghcrm1ka1/subgraphs/mev-commit-validators/test-symbiotic-v6-full/gn"

const prod =
  "https://api.goldsky.com/api/public/project_cm1jo0v0u5zrv01vghcrm1ka1/subgraphs/mev-commit-validators/pr-2/gn"

const config: CodegenConfig = {
  schema: testSymbiotic,

  // this assumes that all your source files are in a top-level `src/` directory - you might need to adjust this to your file structure
  documents: ["src/**/*.{ts,tsx}"],
  generates: {
    "./src/__generated__/": {
      preset: "client",
      plugins: [],
      presetConfig: {
        gqlTagName: "gql",
      },
    },
  },
  ignoreNoDocuments: true,
}

export default config

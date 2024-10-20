import { CodegenConfig } from "@graphql-codegen/cli"

const config: CodegenConfig = {
  schema:
    "https://api.goldsky.com/api/public/project_cm1jo0v0u5zrv01vghcrm1ka1/subgraphs/mev-commit-validators/pr-1/gn",
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

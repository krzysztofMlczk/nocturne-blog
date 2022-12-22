import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema:
    "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cla3pn3c4304q01ug31r99m0o/master",
  documents: ["./gql/documents/**/*.ts"],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    "./gql/codegen/": {
      preset: "client",
      plugins: [],
    },
  },
};

export default config;

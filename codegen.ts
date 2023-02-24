
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://api-us-east-1-shared-usea1-02.hygraph.com/v2/cldkn70op0atu01ungnop74ea/master",
  documents: "src/graphql/**/*.graphql",
  generates: {
    "src/graphql/generate.ts": {
      // preset: "client",
      plugins: ["typescript", "typescript-operations", "typescript-react-apollo"],
    }
  }
};

export default config;

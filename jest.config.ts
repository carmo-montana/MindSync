import type { Config } from "jest";

const config: Config = {
  testMatch: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[tj]s?(x)"], // Padrão de arquivos de teste
  testPathIgnorePatterns: ["/node_modules/"], // Ignorar node_modules
  transform: {
    "^.+\\.ts$": "ts-jest", // Transformar arquivos TypeScript
  },
};

export default config;
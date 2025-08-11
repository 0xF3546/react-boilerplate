import { defineConfig } from "@hey-api/openapi-ts";

export default defineConfig({
    client: 'legacy/axios',
    input: 'public/api.json',
    output: {
        path: 'src/generated/api',
        lint: 'eslint',
        format: 'prettier'
    },
    types: {
        name: 'PascalCase',
        enums: 'typescript+namespace'
    },
    schemas: {
        export: false,
    },
    services: {
        asClass: false,
    }
});
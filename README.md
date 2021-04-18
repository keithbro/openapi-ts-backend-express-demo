# OpenAPI-TS-Backend + Express Demo

An example of how to use `openapi-ts-backend` and `openapi-typescript-codegen` to create typed request handlers that integrate with Express and a TypeScript client library.

## Why is this interesting?

- openapi.yaml as the single source of truth
- Automatic generation of request and response types
- Automatic validation of request and response data
- Automatic coercion of request data e.g. numeric query parameters
- Automatic generation of a TypeScript client library

## Run the server

```sh
yarn dev
```

## Run the tests

```sh
yarn test
```

## Update the Schema:

- Update the openapi.yaml file.
- Run `yarn generate:all`.
- Request handlers and the client library will now be typed with the changes.

## Notes

openapi-ts-backend

- unknown format "int32" ignored in schema at path "#/properties/limit" (will be fixed with upcoming ajv-format release)
- No safe way to set headers (might be because of the default response in the OpenAPI schema)
- Would be cool if we could coerce dates to JS Date objects

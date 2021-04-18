# OpenAPI-TS-Backend + Express Demo

An example of how to use openapi-ts-backend to create typed request handlers that integrate with Express.

## Why is this cool?

- openapi.yaml as the single source of truth
- Automatically generated request and response types
- Automatic validation of requests and responses
- Automatic coercion of request data e.g. numeric query parameters

## Run the server

```sh
yarn dev
```

## Run the tests

```sh
yarn test
```

## Updating the Schema:

- Update the openapi.yaml file.
- Run `yarn types:generate`.
- Request handlers will now be typed with the changes.

## Notes

openapi-ts-backend

- unknown format "int32" ignored in schema at path "#/properties/limit" (will be fixed with upcoming ajv-format release)
- No safe way to set headers (might be because of the default response in the OpenAPI schema)
- Would be cool if we could coerce dates to JS Date objects

# OpenAPI-TS-Backend + Express Demo

An example of how to use openapi-ts-backend to create typed request handlers that integrate with Express.

## NOtes

openapi-ts-backend

- unknown format "int32" ignored in schema at path "#/properties/limit" (will be fixed with upcoming ajv-format release)
- No safe way to set headers (might be because of the default response in the OpenAPI schema)
- Would be cool if we could coerce dates to JS Date objects

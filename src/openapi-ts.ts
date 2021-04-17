import { OpenApi } from "openapi-ts-backend";

import { OperationHandlers } from "./gen/index";

const operations: OperationHandlers<unknown> = {
  createPets: (req) => {
    console.log({ body: req.body });
    return undefined;
  },
  listPets: (req, res) => {
    console.log({ query: req.query });
    res.headers["x-next"] = 1; // Can we set headers in a type-safe way?
    return [{ id: 1, name: "Keith" }];
  },
  showPetById: (req) => {},
};

export const api = new OpenApi().register({
  definition: "./openapi.yaml",
  operations,
});

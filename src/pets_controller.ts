import { OperationHandler, OperationHandlers } from "./gen/index";

export const createPets: OperationHandler<unknown, "createPets"> = (req) => {
  console.log({ body: req.body });
  return undefined;
};

export const listPets: OperationHandler<unknown, "listPets"> = (req, res) => {
  console.log({ query: req.query });
  res.headers["x-next"] = 1; // Can we set headers in a type-safe way?
  return [{ id: 1, name: "Keith" }];
};

export const showPetById: OperationHandlers<unknown>["showPetById"] = (req) => {
  return { id: req.params.petId, name: "Savage" };
};

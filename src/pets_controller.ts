import { OperationHandler, OperationHandlers } from "./autogen";

export const createPets: OperationHandler<unknown, "createPets"> = (req) => {
  console.log({ body: req.body });
  return undefined;
};

export const listPets: OperationHandler<unknown, "listPets"> = (req, res) => {
  console.log({ query: req.query });
  res.headers["x-next"] = 1; // Can we set headers in a type-safe way? Might be something to do with the default response.
  return [{ id: "d6896e62-292f-4ca4-b162-c85697708bfd", name: "Keith" }];
};

export const showPetById: OperationHandlers<unknown>["showPetById"] = (req) => {
  return { id: req.params.petId, name: "Savage" };
};

import { OperationHandler, OperationHandlers } from "./generated/types";

export const createPets: OperationHandler<unknown, "createPets"> = (req) => {
  console.log({ body: req.body });
  return undefined;
};

export const listPets: OperationHandler<unknown, "listPets"> = (req, res) => {
  console.log({ query: req.query });
  res.headers["x-next"] = 1; // Type safety lost due to multiple response header options.
  return [{ id: "d6896e62-292f-4ca4-b162-c85697708bfd", name: "Keith" }];
};

export const showPetById: OperationHandlers<unknown>["showPetById"] = (req) => {
  return { id: req.params.petId, name: "Savage" };
};

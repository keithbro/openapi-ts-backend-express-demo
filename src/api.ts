import { OpenApi } from "openapi-ts-backend";
import { OperationHandlers } from "./generated/types";
import { showPetById, listPets, createPets } from "./pets_controller";

// TODO: Fix annoying workaround
const operations: OperationHandlers<unknown> = {
  showPetById,
  listPets,
  createPets,
};

export const api = new OpenApi().register({
  definition: "./openapi.yaml",
  operations,
});

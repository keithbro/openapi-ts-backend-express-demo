import * as Api from "./gen";

export const listPets: Api.OperationHandler<any, "listPets"> = (req) => {
  console.log(req.query.limit);
  return [{ id: 1, name: "Brian" }];
};

import { listPets, createPets } from "./pets_controller";

describe("openapi-ts", () => {
  it("listPets", async () => {
    const res = { headers: {} };
    const resBody = listPets({} as any, res as any, {} as any);
    expect(resBody).toEqual([{ id: 1, name: "Keith" }]);
  });

  it("listPets with limit", async () => {
    const res = { headers: {} };
    const resBody = listPets(
      { query: { limit: 5 } } as any,
      res as any,
      {} as any
    );
    expect(resBody).toEqual([{ id: 1, name: "Keith" }]);
  });
});

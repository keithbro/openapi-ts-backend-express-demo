import { listPets } from "./pets_controller";

describe("openapi-ts", () => {
  it("listPets", async () => {
    const res = { headers: {} };
    const resBody = listPets({} as any, res as any, {} as any);
    expect(resBody).toEqual([
      { id: "d6896e62-292f-4ca4-b162-c85697708bfd", name: "Keith" },
    ]);
  });

  it("listPets with limit", async () => {
    const res = { headers: {} };
    const resBody = listPets(
      { query: { limit: 5 } } as any,
      res as any,
      {} as any
    );
    expect(resBody).toEqual([
      { id: "d6896e62-292f-4ca4-b162-c85697708bfd", name: "Keith" },
    ]);
  });
});

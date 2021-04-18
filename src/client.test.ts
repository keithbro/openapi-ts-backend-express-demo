import { PetsService } from "./client";
import fetch from "node-fetch";
import nock from "nock";

/**
 * @jest-environment jsdom
 */

describe("client", () => {
  beforeEach(() => {
    global.fetch = fetch as any;
    nock.disableNetConnect();
  });

  it("calls fetch with the expected params", async () => {
    const scope = nock("http://petstore.swagger.io")
      .get("/v1/pets/9023001201201000000")
      .reply(200, { id: 9023001201201000000, name: "Antonio" });

    const pets = await PetsService.showPetById("9023001201201000000");

    expect(pets).toEqual({
      id: 9023001201201000000,
      name: "Antonio",
    });
  });
});

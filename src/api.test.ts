import { api } from "./api";

describe("server", () => {
  it("createPets - missing requestBody", async () => {
    const res = await api.handleRequest({
      method: "post",
      path: "/pets",
      headers: {},
    });
    expect(res.body).toEqual({
      data: {
        errors: [
          {
            data: {
              dataPath: "",
              keyword: "required",
              params: { missingProperty: "requestBody" },
            },
            message: "Request should have required property 'requestBody'",
          },
        ],
      },
      message: "Invalid request",
    });
  });

  it("createPet - missing ID", async () => {
    const res = await api.handleRequest({
      method: "post",
      path: "/pets",
      headers: {},
      body: {},
    });
    expect(res.body).toEqual({
      data: {
        errors: [
          {
            data: {
              dataPath: ".requestBody",
              keyword: "required",
              params: { missingProperty: "id" },
            },
            message: ".requestBody should have required property 'id'",
          },
        ],
      },
      message: "Invalid request",
    });
  });

  it("createPet", async () => {
    const res = await api.handleRequest({
      method: "post",
      path: "/pets",
      headers: {},
      body: { id: 42, name: "Eddie Eggman" },
    });
    expect(res.body).toEqual(undefined);
    expect(res.statusCode).toEqual(201);
  });
});

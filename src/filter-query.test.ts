import { StringParams } from "openapi-ts-backend";
import { ParsedQs } from "qs";
import { convertQuery } from "./filter-query";

describe("filterQuery", () => {
  it("removes undefined values", () => {
    const query: ParsedQs = { a: "1", b: undefined };

    expect(convertQuery(query)).toEqual({ a: "1" } as StringParams);
  });

  it("ignores nested values", () => {
    const query: ParsedQs = {
      a: "1",
      b: undefined,
      c: { d: "x", e: undefined },
    };

    expect(convertQuery(query)).toEqual({
      a: "1",
    } as StringParams);
  });

  it("keeps array values", () => {
    const query: ParsedQs = {
      a: "1",
      b: undefined,
      c: { d: "x", e: undefined },
      e: ["1", "2"],
    };

    expect(convertQuery(query)).toEqual({
      a: "1",
      e: ["1", "2"],
    } as StringParams);
  });
});

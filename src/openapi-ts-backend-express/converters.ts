import { pipe } from "fp-ts/lib/function";
import { filter } from "fp-ts/lib/Record";
import { IncomingHttpHeaders } from "http";
import { StringParams } from "openapi-ts-backend";
import { OneOrMany } from "openapi-ts-backend/dist/utils";
import { ParsedQs } from "qs";

type ParsedQsValue = string | string[] | ParsedQs | ParsedQs[] | undefined;

const isStringBased = (x: ParsedQsValue): x is OneOrMany<string> => {
  if (typeof x === "string") return true;
  if (Array.isArray(x) && typeof x[0] === "string") return true;

  return false;
};

const predicate = filter(isStringBased);

export const convertQuery = (parsedQs: ParsedQs): StringParams =>
  pipe(parsedQs, predicate);

export const convertHeaders = (
  httpHeaders: IncomingHttpHeaders
): StringParams => pipe(httpHeaders, predicate);

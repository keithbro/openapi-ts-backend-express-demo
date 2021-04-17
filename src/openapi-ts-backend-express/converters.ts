import { pipe, Refinement } from "fp-ts/lib/function";
import { filter } from "fp-ts/lib/Record";
import { IncomingHttpHeaders } from "http";
import { StringParams } from "openapi-ts-backend";
import { OneOrMany } from "openapi-ts-backend/dist/utils";
import { ParsedQs } from "qs";

type ParsedQsValues = string | string[] | ParsedQs | ParsedQs[] | undefined;
type OurRefinement = Refinement<ParsedQsValues, OneOrMany<string>>;

const isStringBased: OurRefinement = (x): x is OneOrMany<string> => {
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

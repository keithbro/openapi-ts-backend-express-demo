import { pipe, Refinement } from "fp-ts/lib/function";
import { filter } from "fp-ts/lib/Record";
import { IncomingHttpHeaders } from "http";
import {
  OpenApi,
  RawRequest,
  RawResponse,
  StringParams,
} from "openapi-ts-backend";
import { OneOrMany } from "openapi-ts-backend/dist/utils";
import { ParsedQs } from "qs";
import { Request, Response, RequestHandler } from "express";

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

const convertHeaders = (httpHeaders: IncomingHttpHeaders): StringParams =>
  pipe(httpHeaders, predicate);

const applyResponse = (rawRes: RawResponse, res: Response): void => {
  res.statusCode = rawRes.statusCode;
  res.json(rawRes.body);
};

const buildRequest = (req: Request): RawRequest => {
  return {
    headers: convertHeaders(req.headers),
    query: convertQuery(req.query),
    method: req.method,
    path: req.path,
  };
};

export const connect = (api: OpenApi<unknown>): RequestHandler => {
  return async (req, res) => {
    const rawReq = buildRequest(req);
    const rawRes = await api.handleRequest(rawReq);

    applyResponse(rawRes, res);
  };
};

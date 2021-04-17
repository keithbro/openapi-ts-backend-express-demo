import { OpenApi, RawRequest, RawResponse } from "openapi-ts-backend";
import { Request, Response, RequestHandler } from "express";
import { convertHeaders, convertQuery } from "./converters";

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
    body: req.body,
  };
};

export const connect = (api: OpenApi<unknown>): RequestHandler => {
  return async (req, res) => {
    const rawReq = buildRequest(req);
    const rawRes = await api.handleRequest(rawReq);

    applyResponse(rawRes, res);
  };
};


import {RequestHandler, Params, Request, Response} from 'openapi-ts-backend';
import {operations} from './spec';
import {RequestBody, RequestHeaders, RequestPathParams, RequestQuery, ResponseBody, ResponseHeaders} from './requests';

export type OperationRequest<OperationId extends keyof operations> = Request<
    RequestBody<OperationId>,
    Params & RequestPathParams<OperationId>,
    Params & RequestQuery<OperationId>,
    Params & RequestHeaders<OperationId>>;

export type OperationResponse<OperationId extends keyof operations> = Response<
    ResponseBody<OperationId>,
    Params & ResponseHeaders<OperationId>>;

export type OperationHandler<T, OperationId extends keyof operations> = RequestHandler<T,
    OperationRequest<OperationId>,
    OperationResponse<OperationId>>;
    
export interface OperationHandlers<T>
    extends Record<string, RequestHandler<T, Request<any, any, any, any>, Response<any, any>>> {
  listPets: OperationHandler<T, 'listPets'>;
  createPets: OperationHandler<T, 'createPets'>;
  showPetById: OperationHandler<T, 'showPetById'>;
}   

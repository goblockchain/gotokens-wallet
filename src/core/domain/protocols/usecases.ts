export interface Usecases <Params= any, Response = any>{
    performs(params: Params):Promise<Response>
}
export interface HttpClient <ResponseType = any> {
  request: (data: HttpClient.Request) => Promise<HttpResponse<ResponseType>>
}

export interface HttpRequest {
  url: string
  method: HttpMethod
  body?: any
  headers?: any
}

export type HttpMethod = 'post' | 'get' | 'put' | 'delete'

export enum HttpStatusCode {
  ok = 200,
  noContent = 204,
  badRequest = 400,
  unauthorized = 401,
  forbidden = 403,
  notFound = 404,
  serverError = 500
}

export interface HttpResponse<BodyType = any> {
  statusCode: HttpStatusCode
  body?: BodyType
}

export namespace HttpClient {
  export type Request = HttpRequest
}

import { HttpClient, HttpStatusCode } from "@/core/data/protocols/http";
import { InvalidCredentialsError, UnexpectedError } from "@/core/domain/errors";
import { AccountResponse, AuthenticationParams } from "@/core/domain/models";
import { Usecases } from "@/core/domain/protocols";

export class RemoteAuthentication  implements RemoteAuthentication.Usecase
{
    constructor (
        private readonly url: string,
        private readonly httpClient: HttpClient<RemoteAuthentication.Response>

        ) {}

    async performs (params: RemoteAuthentication.Params):Promise<RemoteAuthentication.Response> {
       const httpResponse = await this.httpClient.request({
           url: this.url + `/user`,
           method: "post",
           body:params
        })
        switch (httpResponse.statusCode) {
            case HttpStatusCode.ok: return httpResponse.body
            case HttpStatusCode.unauthorized:throw new InvalidCredentialsError()
            default: throw new UnexpectedError()
        }
    }
}

//remoteAuthentication.params === authenticationsParams
export namespace RemoteAuthentication {
    export type Params = AuthenticationParams
    export type Response = AccountResponse
    export type Usecase = Usecases<RemoteAuthentication.Params,RemoteAuthentication.Response>
}
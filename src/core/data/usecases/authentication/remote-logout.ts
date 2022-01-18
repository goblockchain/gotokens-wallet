import { HttpClient, HttpStatusCode } from "@/core/data/protocols/http";
import { InvalidCredentialsError, UnexpectedError } from "@/core/domain/errors";
import { AccountLogoutResponse } from "@/core/domain/models";
import { Usecases } from "@/core/domain/protocols";

export class RemoteLogout  implements RemoteLogout.Usecase
{
    constructor (
        private readonly url: string,
        private readonly httpClient: HttpClient<RemoteLogout.Response>

        ) {}

    async performs (params: RemoteLogout.Params):Promise<RemoteLogout.Response> {
       const httpResponse = await this.httpClient.request({
           url: this.url + `/user/logout`,
           method: "get",
           body: params
        })
        switch (httpResponse.statusCode) {
            case HttpStatusCode.ok: return httpResponse.body
            case HttpStatusCode.unauthorized:throw new InvalidCredentialsError()
            default: throw new UnexpectedError()
        }
    }
}

//RemoteLogout.params === authenticationsParams
export namespace RemoteLogout {
    export type Params = null
    export type Response = AccountLogoutResponse
    export type Usecase = Usecases<RemoteLogout.Params,RemoteLogout.Response>
}
import { HttpClient, HttpStatusCode } from "@/core/data/protocols/http";
import { InvalidCredentialsError, UnexpectedError } from "@/core/domain/errors";
import { AccountResponse,LoginParams } from "@/core/domain/models";
import { Usecases } from "@/core/domain/protocols";

export class RemoteLogin  implements RemoteLogin.Usecase
{
    constructor (
        private readonly url: string,
        private readonly httpClient: HttpClient<RemoteLogin.Response>

        ) {}

    async performs (params: RemoteLogin.Params):Promise<RemoteLogin.Response> {
       const httpResponse = await this.httpClient.request({
           url: this.url + `/user/login`,
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

//RemoteLogin.params === authenticationsParams
export namespace RemoteLogin {
    export type Params = LoginParams
    export type Response = AccountResponse
    export type Usecase = Usecases<RemoteLogin.Params,RemoteLogin.Response>
}
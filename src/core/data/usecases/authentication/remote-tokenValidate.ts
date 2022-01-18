import { HttpClient, HttpStatusCode } from "@/core/data/protocols/http";
import { InvalidCredentialsError, UnexpectedError } from "@/core/domain/errors";
import { TokenValidateResponse, TokenValidateParams } from "@/core/domain/models";
import { Usecases } from "@/core/domain/protocols";

export class RemotePostTokenValidate  implements RemotePostTokenValidate.Usecase
{
    constructor (
        private readonly url: string,
        private readonly httpClient: HttpClient<RemotePostTokenValidate.Response>

        ) {}

    async performs (params: RemotePostTokenValidate.Params):Promise<RemotePostTokenValidate.Response> {
       const httpResponse = await this.httpClient.request({
           url: this.url + `/user/${params.username}/tokenValidate`,
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

//remotePostTokenValidate.params === authenticationsParams
export namespace RemotePostTokenValidate {
    export type Params = TokenValidateParams
    export type Response = TokenValidateResponse
    export type Usecase = Usecases<RemotePostTokenValidate.Params,RemotePostTokenValidate.Response>
}
import { HttpClient, HttpStatusCode } from "@/core/data/protocols/http";
import { InvalidCredentialsError, UnexpectedError } from "@/core/domain/errors";
import { ProfileResponse, UsernameQuery } from "@/core/domain/models";
import { Usecases } from "@/core/domain/protocols";

export class RemoteProfile  implements RemoteProfile.Usecase
{
    constructor (
        private readonly url: string,
        private readonly httpClient: HttpClient<RemoteProfile.Response>

        ) {}

    async performs (params: RemoteProfile.Params):Promise<RemoteProfile.Response> {
       const httpResponse = await this.httpClient.request({
           url: this.url + `/user/${params.username}`,
           method: "get",
           body:null
        })
        switch (httpResponse.statusCode) {
            case HttpStatusCode.ok: return httpResponse.body
            case HttpStatusCode.unauthorized:throw new InvalidCredentialsError()
            default: throw new UnexpectedError()
        }
    }
}

//RemoteProfile.params === authenticationsParams
export namespace RemoteProfile {
    export type Params = UsernameQuery
    export type Response = ProfileResponse
    export type Usecase = Usecases<RemoteProfile.Params,RemoteProfile.Response>
}
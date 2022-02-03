import { HttpClient, HttpStatusCode } from "@/core/data/protocols/http";
import { InvalidCredentialsError, UnexpectedError } from "@/core/domain/errors";
import { ProfileResponse } from "@/core/domain/models";
import { Usecases } from "@/core/domain/protocols";

export class RemoteUpdateProfile  implements RemoteUpdateProfile.Usecase
{
    constructor (
        private readonly url: string,
        private readonly httpClient: HttpClient<RemoteUpdateProfile.Response>

        ) {}

    async performs (params: RemoteUpdateProfile.Params):Promise<RemoteUpdateProfile.Response> {
       const httpResponse = await this.httpClient.request({
           url: this.url + `/user/${params.username}`,
           method: "put",
           body:params
        })
        switch (httpResponse.statusCode) {
            case HttpStatusCode.ok: return httpResponse.body
            case HttpStatusCode.unauthorized:throw new InvalidCredentialsError()
            default: throw new UnexpectedError()
        }
    }
}

//RemoteUpdateProfile.params === authenticationsParams
export namespace RemoteUpdateProfile {
    export type Params = ProfileResponse
    export type Response = ProfileResponse
    export type Usecase = Usecases<RemoteUpdateProfile.Params,RemoteUpdateProfile.Response>
}
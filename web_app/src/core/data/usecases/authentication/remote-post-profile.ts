import { HttpClient, HttpStatusCode } from "@/core/data/protocols/http";
import { InvalidCredentialsError, UnexpectedError } from "@/core/domain/errors";
import { ProfilePostResponse, ProfileParams } from "@/core/domain/models";
import { Usecases } from "@/core/domain/protocols";

export class RemotePostUpdateUserProfile  implements RemotePostUpdateUserProfile.Usecase
{
    constructor (
        private readonly url: string,
        private readonly httpClient: HttpClient<RemotePostUpdateUserProfile.Response>

        ) {}

    async performs (params: RemotePostUpdateUserProfile.Params):Promise<RemotePostUpdateUserProfile.Response> {
       const httpResponse = await this.httpClient.request({
           url: this.url + `/user/${params.username}/profile`,
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

//remoteUpdateUserProfile.params === authenticationsParams
export namespace RemotePostUpdateUserProfile {
    export type Params = ProfileParams
    export type Response = ProfilePostResponse
    export type Usecase = Usecases<RemotePostUpdateUserProfile.Params,RemotePostUpdateUserProfile.Response>
}
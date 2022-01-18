import { HttpClient, HttpStatusCode } from "@/core/data/protocols/http";
import { InvalidCredentialsError, UnexpectedError } from "@/core/domain/errors";
import { ProfileSocialNetWorkResponse } from "@/core/domain/models";
import { Usecases } from "@/core/domain/protocols";

export class RemoteUpdateProfileSocialNetwork  implements RemoteUpdateProfileSocialNetwork.Usecase
{
    constructor (
        private readonly url: string,
        private readonly httpClient: HttpClient<RemoteUpdateProfileSocialNetwork.Response>

        ) {}

    async performs (params: RemoteUpdateProfileSocialNetwork.Params):Promise<RemoteUpdateProfileSocialNetwork.Response> {
       const httpResponse = await this.httpClient.request({
           url: this.url + `/user/${params.username}/profile/${params.profileid}/socialNetworking`,
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

//RemoteUpdateUserProfile.params === authenticationsParams
export namespace RemoteUpdateProfileSocialNetwork {
    export type Params = ProfileSocialNetWorkResponse
    export type Response = ProfileSocialNetWorkResponse
    export type Usecase = Usecases<RemoteUpdateProfileSocialNetwork.Params,RemoteUpdateProfileSocialNetwork.Response>
}
import { HttpClient, HttpStatusCode } from "@/core/data/protocols/http";
import { InvalidCredentialsError, UnexpectedError } from "@/core/domain/errors";
import { ProfilePostSocialNetWorkResponse, ProfileSocialNetworkingParams } from "@/core/domain/models";
import { Usecases } from "@/core/domain/protocols";

export class RemotePostProfileSocialNetWork  implements RemotePostProfileSocialNetWork.Usecase
{
    constructor (
        private readonly url: string,
        private readonly httpClient: HttpClient<RemotePostProfileSocialNetWork.Response>

        ) {}

    async performs (params: RemotePostProfileSocialNetWork.Params):Promise<RemotePostProfileSocialNetWork.Response> {
       const httpResponse = await this.httpClient.request({
           url: this.url + `/${params.username}/profile/${params.profileid}/socialNetworking`,
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
export namespace RemotePostProfileSocialNetWork {
    export type Params = ProfileSocialNetworkingParams
    export type Response = ProfilePostSocialNetWorkResponse
    export type Usecase = Usecases<RemotePostProfileSocialNetWork.Params,RemotePostProfileSocialNetWork.Response>
}
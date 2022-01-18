import { HttpClient, HttpStatusCode } from "@/core/data/protocols/http";
import { InvalidCredentialsError, UnexpectedError } from "@/core/domain/errors";
import { UserProfileResponse } from "@/core/domain/models";
import { Usecases } from "@/core/domain/protocols";

export class RemoteUpdateUserProfile  implements RemoteUpdateUserProfile.Usecase
{
    constructor (
        private readonly url: string,
        private readonly httpClient: HttpClient<RemoteUpdateUserProfile.Response>

        ) {}

    async performs (params: RemoteUpdateUserProfile.Params):Promise<RemoteUpdateUserProfile.Response> {
       const httpResponse = await this.httpClient.request({
           url: this.url + `/user/${params.username}/profile`,
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
export namespace RemoteUpdateUserProfile {
    export type Params = UserProfileResponse
    export type Response = UserProfileResponse
    export type Usecase = Usecases<RemoteUpdateUserProfile.Params,RemoteUpdateUserProfile.Response>
}
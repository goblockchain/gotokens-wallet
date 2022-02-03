import { HttpClient, HttpStatusCode } from "@/core/data/protocols/http";
import { InvalidCredentialsError, UnexpectedError } from "@/core/domain/errors";
import { DeleteProfileResponse, UsernameQuery} from "@/core/domain/models";
import { Usecases } from "@/core/domain/protocols";

export class RemoteDeleteProfile  implements RemoteDeleteProfile.Usecase
{
    constructor (
        private readonly url: string,
        private readonly httpClient: HttpClient<RemoteDeleteProfile.Response>

        ) {}

    async performs (params: RemoteDeleteProfile.Params):Promise<RemoteDeleteProfile.Response> {
       const httpResponse = await this.httpClient.request({
           url: this.url + `/user/${params.username}`,
           method: "delete",
           body:null
        })
        switch (httpResponse.statusCode) {
            case HttpStatusCode.ok: return httpResponse.body
            case HttpStatusCode.unauthorized:throw new InvalidCredentialsError()
            default: throw new UnexpectedError()
        }
    }
}

//RemoteDeleteProfile.params === authenticationsParams
export namespace RemoteDeleteProfile {
    export type Params = UsernameQuery
    export type Response = DeleteProfileResponse
    export type Usecase = Usecases<RemoteDeleteProfile.Params,RemoteDeleteProfile.Response>
}
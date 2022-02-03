import { HttpClient, HttpStatusCode } from "@/core/data/protocols/http";
import { InvalidCredentialsError, UnexpectedError } from "@/core/domain/errors";
import { ReturnsNftResponse, UserIdQuery } from "@/core/domain/models";
import { Usecases } from "@/core/domain/protocols";

export class RemoteReturnsNft  implements RemoteReturnsNft.Usecase
{
    constructor (
        private readonly url: string,
        private readonly httpClient: HttpClient<RemoteReturnsNft.Response>

        ) {}

    async performs (params: RemoteReturnsNft.Params):Promise<RemoteReturnsNft.Response> {
       const httpResponse = await this.httpClient.request({
           url: this.url + `/store/inventory/${params.userId}`,
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

//RemoteFindById.params === authenticationsParams
export namespace RemoteReturnsNft {
    export type Params = UserIdQuery
    export type Response = ReturnsNftResponse
    export type Usecase = Usecases<RemoteReturnsNft.Params,RemoteReturnsNft.Response>
}
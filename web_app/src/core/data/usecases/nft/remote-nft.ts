import { HttpClient, HttpStatusCode } from "@/core/data/protocols/http";
import { InvalidCredentialsError, UnexpectedError } from "@/core/domain/errors";
import { NftResponse, NftParams } from "@/core/domain/models";
import { Usecases } from "@/core/domain/protocols";

export class RemoteNft  implements RemoteNft.Usecase
{
    constructor (
        private readonly url: string,
        private readonly httpClient: HttpClient<RemoteNft.Response>

        ) {}

    async performs (params: RemoteNft.Params):Promise<RemoteNft.Response> {
       const httpResponse = await this.httpClient.request({
           url: this.url+ `/nft`,
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

//remoteNft.params === authenticationsParams
export namespace RemoteNft {
    export type Params = NftParams
    export type Response = NftResponse
    export type Usecase = Usecases<RemoteNft.Params,RemoteNft.Response>
}
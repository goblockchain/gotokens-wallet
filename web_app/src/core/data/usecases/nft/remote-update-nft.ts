import { HttpClient, HttpStatusCode } from "@/core/data/protocols/http";
import { InvalidCredentialsError, UnexpectedError } from "@/core/domain/errors";
import { NftUpdateResponse } from "@/core/domain/models";
import { Usecases } from "@/core/domain/protocols";

export class RemoteUpdateNft  implements RemoteUpdateNft.Usecase
{
    constructor (
        private readonly url: string,
        private readonly httpClient: HttpClient<RemoteUpdateNft.Response>

        ) {}

    async performs (params: RemoteUpdateNft.Params):Promise<RemoteUpdateNft.Response> {
       const httpResponse = await this.httpClient.request({
           url: this.url+ `/nft` ,
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

//RemoteUpdateNft.params === authenticationsParams
export namespace RemoteUpdateNft {
    export type Params = NftUpdateResponse
    export type Response = NftUpdateResponse
    export type Usecase = Usecases<RemoteUpdateNft.Params,RemoteUpdateNft.Response>
}
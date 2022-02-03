import { HttpClient, HttpStatusCode } from "@/core/data/protocols/http";
import { InvalidCredentialsError, UnexpectedError } from "@/core/domain/errors";
import { NftPriceResponse, NftPriceParams } from "@/core/domain/models";
import { Usecases } from "@/core/domain/protocols";

export class RemoteNftCreateFixedPrice  implements RemoteNftCreateFixedPrice.Usecase
{
    constructor (
        private readonly url: string,
        private readonly httpClient: HttpClient<RemoteNftCreateFixedPrice.Response>

        ) {}

    async performs (params: RemoteNftCreateFixedPrice.Params):Promise<RemoteNftCreateFixedPrice.Response> {
       const httpResponse = await this.httpClient.request({
           url: this.url+ `/nft/create/fixed-price`,
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

//remoteNftCreateFixedPrice.params === authenticationsParams
export namespace RemoteNftCreateFixedPrice {
    export type Params = NftPriceParams
    export type Response = NftPriceResponse
    export type Usecase = Usecases<RemoteNftCreateFixedPrice.Params,RemoteNftCreateFixedPrice.Response>
}
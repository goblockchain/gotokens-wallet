import { HttpClient, HttpStatusCode } from "@/core/data/protocols/http";
import { InvalidCredentialsError, UnexpectedError } from "@/core/domain/errors";
import { DeleteNftResponse, NftDeleteQuery} from "@/core/domain/models";
import { Usecases } from "@/core/domain/protocols";

export class RemoteDeleteNft  implements RemoteDeleteNft.Usecase
{
    constructor (
        private readonly url: string,
        private readonly httpClient: HttpClient<RemoteDeleteNft.Response>

        ) {}

    async performs (params: RemoteDeleteNft.Params):Promise<RemoteDeleteNft.Response> {
       const httpResponse = await this.httpClient.request({
           url: this.url + `/nft/${params.apiKey, params.nftHash }`,
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

//RemoteDeleteNft.params === authenticationsParams
export namespace RemoteDeleteNft {
    export type Params = NftDeleteQuery
    export type Response = DeleteNftResponse
    export type Usecase = Usecases<RemoteDeleteNft.Params,RemoteDeleteNft.Response>
}
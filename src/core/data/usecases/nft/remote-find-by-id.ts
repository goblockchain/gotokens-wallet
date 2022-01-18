import { HttpClient, HttpStatusCode } from "@/core/data/protocols/http";
import { InvalidCredentialsError, UnexpectedError } from "@/core/domain/errors";
import { FindByIdResponse, NftHashQuery } from "@/core/domain/models";
import { Usecases } from "@/core/domain/protocols";

export class RemoteFindById  implements RemoteFindById.Usecase
{
    constructor (
        private readonly url: string,
        private readonly httpClient: HttpClient<RemoteFindById.Response>

        ) {}

    async performs (params: RemoteFindById.Params):Promise<RemoteFindById.Response> {
       const httpResponse = await this.httpClient.request({
           url: this.url + `/nft/${params.nftHash}`,
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
export namespace RemoteFindById {
    export type Params = NftHashQuery
    export type Response = FindByIdResponse
    export type Usecase = Usecases<RemoteFindById.Params,RemoteFindById.Response>
}
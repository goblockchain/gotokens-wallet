import { HttpClient, HttpStatusCode } from "@/core/data/protocols/http";
import { InvalidCredentialsError, UnexpectedError } from "@/core/domain/errors";
import { WalletPutResponse } from "@/core/domain/models";
import { Usecases } from "@/core/domain/protocols";

export class RemoteUpdateWallet  implements RemoteUpdateWallet.Usecase
{
    constructor (
        private readonly url: string,
        private readonly httpClient: HttpClient<RemoteUpdateWallet.Response>

        ) {}

    async performs (params: RemoteUpdateWallet.Params):Promise<RemoteUpdateWallet.Response> {
       const httpResponse = await this.httpClient.request({
           url: this.url + `/user/${params.username}/wallet`,
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

//RemoteUpdateWallet.params === authenticationsParams
export namespace RemoteUpdateWallet {
    export type Params = WalletPutResponse
    export type Response = WalletPutResponse
    export type Usecase = Usecases<RemoteUpdateWallet.Params,RemoteUpdateWallet.Response>
}
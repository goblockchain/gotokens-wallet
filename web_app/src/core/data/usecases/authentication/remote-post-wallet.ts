import { HttpClient, HttpStatusCode } from "@/core/data/protocols/http";
import { InvalidCredentialsError, UnexpectedError } from "@/core/domain/errors";
import { WalletResponse, WalletParams } from "@/core/domain/models";
import { Usecases } from "@/core/domain/protocols";

export class RemotePostWallet  implements RemotePostWallet.Usecase
{
    constructor (
        private readonly url: string,
        private readonly httpClient: HttpClient<RemotePostWallet.Response>

        ) {}

    async performs (params: RemotePostWallet.Params):Promise<RemotePostWallet.Response> {
       const httpResponse = await this.httpClient.request({
           url: this.url + `/user/${params.username}/wallet`,
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
export namespace RemotePostWallet {
    export type Params = WalletParams
    export type Response = WalletResponse
    export type Usecase = Usecases<RemotePostWallet.Params,RemotePostWallet.Response>
}
import { HttpClient, HttpStatusCode } from "@/core/data/protocols/http";
import { InvalidCredentialsError, UnexpectedError } from "@/core/domain/errors";
import { FindByUserResponse, IdUserQuery } from "@/core/domain/models";
import { Usecases } from "@/core/domain/protocols";

export class RemoteFindByUser  implements RemoteFindByUser.Usecase
{
    constructor (
        private readonly url: string,
        private readonly httpClient: HttpClient<RemoteFindByUser.Response>

        ) {}

    async performs (params: RemoteFindByUser.Params):Promise<RemoteFindByUser.Response> {
       const httpResponse = await this.httpClient.request({
           url: this.url+ `/nft/findByUser` + params.idUser,
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

//RemoteFindByUser.params === authenticationsParams
export namespace RemoteFindByUser {
    export type Params = IdUserQuery
    export type Response = FindByUserResponse
    export type Usecase = Usecases<RemoteFindByUser.Params,RemoteFindByUser.Response>
}
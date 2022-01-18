import { HttpClient, HttpStatusCode } from "@/core/data/protocols/http";
import { InvalidCredentialsError, UnexpectedError } from "@/core/domain/errors";
import { FindOrderByIdResponse, OrderIdQuery } from "@/core/domain/models";
import { Usecases } from "@/core/domain/protocols";

export class RemoteFindOrderById  implements RemoteFindOrderById.Usecase
{
    constructor (
        private readonly url: string,
        private readonly httpClient: HttpClient<RemoteFindOrderById.Response>

        ) {}

    async performs (params: RemoteFindOrderById.Params):Promise<RemoteFindOrderById.Response> {
       const httpResponse = await this.httpClient.request({
           url: this.url + `/store/order/${params.orderId}`,
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
export namespace RemoteFindOrderById {
    export type Params = OrderIdQuery
    export type Response = FindOrderByIdResponse
    export type Usecase = Usecases<RemoteFindOrderById.Params,RemoteFindOrderById.Response>
}
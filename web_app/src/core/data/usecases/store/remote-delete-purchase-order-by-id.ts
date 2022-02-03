import { HttpClient, HttpStatusCode } from "@/core/data/protocols/http";
import { InvalidCredentialsError, UnexpectedError } from "@/core/domain/errors";
import { DeleteOrderByIdQuery} from "@/core/domain/models";
import { Usecases } from "@/core/domain/protocols";

export class RemoteDeletePurchaseOrderById  implements RemoteDeletePurchaseOrderById.Usecase
{
    constructor (
        private readonly url: string,
        private readonly httpClient: HttpClient<RemoteDeletePurchaseOrderById.Response>

        ) {}

    async performs (params: RemoteDeletePurchaseOrderById.Params):Promise<RemoteDeletePurchaseOrderById.Response> {
       const httpResponse = await this.httpClient.request({
           url: this.url + `/store/order/${params.orderId}`,
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

//RemoteDeletePurchaseOrderById.params === authenticationsParams
export namespace RemoteDeletePurchaseOrderById {
    export type Params = DeleteOrderByIdQuery
    export type Response = null
    export type Usecase = Usecases<RemoteDeletePurchaseOrderById.Params,RemoteDeletePurchaseOrderById.Response>
}
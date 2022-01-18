import { HttpClient, HttpStatusCode } from "@/core/data/protocols/http";
import { InvalidCredentialsError, UnexpectedError } from "@/core/domain/errors";
import { PlaceOrderResponse, PlaceOrderParams } from "@/core/domain/models";
import { Usecases } from "@/core/domain/protocols";

export class RemotePlaceOrder  implements RemotePlaceOrder.Usecase
{
    constructor (
        private readonly url: string,
        private readonly httpClient: HttpClient<RemotePlaceOrder.Response>

        ) {}

    async performs (params: RemotePlaceOrder.Params):Promise<RemotePlaceOrder.Response> {
       const httpResponse = await this.httpClient.request({
           url: this.url+ `/store/order`,
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

//remotePlaceOrder.params === authenticationsParams
export namespace RemotePlaceOrder {
    export type Params = PlaceOrderParams
    export type Response = PlaceOrderResponse
    export type Usecase = Usecases<RemotePlaceOrder.Params,RemotePlaceOrder.Response>
}
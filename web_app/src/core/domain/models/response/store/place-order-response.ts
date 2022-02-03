import {blockchainInfo, pending} from '@/shared/domain/models'

export type PlaceOrderResponse={
    id: number
    nftid: number
    quantity: number
    shipDate: string
    blockchainInfo: blockchainInfo
    status: pending
    complete: string
}
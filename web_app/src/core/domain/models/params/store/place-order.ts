import { blockchainInfo, pending } from '@/shared/domain/models'

export type PlaceOrderParams = {
  id: number
  nftid: number
  quantity: number
  shipDate: string
  blockchainInfo: blockchainInfo
  status: pending
  complete : string
}
import {nftFile, value, category, metadata, pending} from '@/shared/domain/models'

export type NftPriceResponse={
  id: string
  userId: string
  nftFile: nftFile
  title: string
  quantity: number
  description: string
  value: value
  category: category
  isLockedAfterPurchase: string
  metadata: metadata
  royalties: string
  status: pending
}
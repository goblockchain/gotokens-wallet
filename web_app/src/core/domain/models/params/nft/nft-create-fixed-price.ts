import {nftFile,value,category,metadata } from '@/shared/domain/models'

export type NftPriceParams = {
  userUuid: string
  nftFile: nftFile
  title: string
  quantity: number
  description: string
  value: value
  category: category
  isLockedAfterPurchase: string
  metadata:metadata
  royalties: string
}
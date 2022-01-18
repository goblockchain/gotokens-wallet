import {blockchainInfo, category, nftFile,storageInfo, value} from '@/shared/domain/models'

export type FindByUserResponse={
    userUuid: string
    nftFile: nftFile
    title: string
    quantity: number
    description: string
    value: value
    category: category
    isLockedAfterPurchase: string
    secretMessage: string
    metadata: string
    royalties: number
    status: string
    blockchainInfo: blockchainInfo
    storageInfo: storageInfo
}
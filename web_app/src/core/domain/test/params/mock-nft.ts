import faker from 'faker'
import { NftParams } from '@/core/domain/models'
import { mockNftFile } from '@/shared/domain/test/mock-nftFile'
import { mockValue } from '@/shared/domain/test/mock-nftValue'
import { mockCategory } from '@/shared/domain/test/mock-nftCategory'
import { mockBlockchainInfo } from '@/shared/domain/test/mock-storageInfo'
import { mockStorageInfo } from '@/shared/domain/test/mock-storageInfoNft'

export const mockNft = () : NftParams => ({
    userUuid: faker.datatype.uuid(),
    nftFile: mockNftFile(),
    title: faker.random.word(),
    quantity: faker.datatype.number(),
    description: faker.random.word(),
    value: mockValue(),
    category: mockCategory(),
    isLockedAfterPurchase: faker.random.word(),
    secretMessage: faker.random.word(),
    metadata: faker.random.word(),
    royalties: faker.datatype.number(),
    status: faker.random.word(),
    blockchainInfo: mockBlockchainInfo(),
    storageInfo: mockStorageInfo()
})

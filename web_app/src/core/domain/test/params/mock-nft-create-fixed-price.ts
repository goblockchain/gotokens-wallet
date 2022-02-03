import faker from 'faker'
import { NftPriceParams } from '@/core/domain/models'
import { mockNftFile } from '@/shared/domain/test/mock-nftFile'
import { mockValue } from '@/shared/domain/test/mock-nftValue'
import { mockCategory } from '@/shared/domain/test/mock-nftCategory'
import { mockMetadata } from '@/shared/domain/test/mock-nftMetadata'

export const mockNftCreateFixedPrice = () : NftPriceParams => ({
    userUuid: faker.datatype.uuid(),
    nftFile: mockNftFile(),
    title: faker.random.word(),
    quantity: faker.datatype.number(),
    description: faker.random.word(),
    value: mockValue(),
    category: mockCategory(),
    isLockedAfterPurchase: faker.random.word(),
    metadata: mockMetadata(),
    royalties: faker.random.word()
})

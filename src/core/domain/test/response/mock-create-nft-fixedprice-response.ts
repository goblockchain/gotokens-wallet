import { NftPriceResponse } from "@/core/domain/models";
import { mockCategory } from "@/shared/domain/test/mock-nftCategory";
import { mockNftFile } from "@/shared/domain/test/mock-nftFile";
import { mockMetadata } from "@/shared/domain/test/mock-nftMetadata";
import { mockPending } from "@/shared/domain/test/mock-nftPending";
import { mockValue } from "@/shared/domain/test/mock-nftValue";
import faker from 'faker'

export const mockNftFixedPrice = () : NftPriceResponse => ({
    id: faker.datatype.uuid(),
    userId: faker.random.word(),
    nftFile: mockNftFile(),
    title: faker.random.word(),
    quantity: faker.datatype.number(),
    description: faker.random.word(),
    value: mockValue(),
    category: mockCategory(),
    isLockedAfterPurchase: faker.random.word(),
    metadata: mockMetadata(),
    royalties: faker.random.word(),
    status: mockPending()
})
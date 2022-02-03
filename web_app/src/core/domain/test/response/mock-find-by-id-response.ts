import { FindByIdResponse } from "@/core/domain/models";
import { mockCategory } from "@/shared/domain/test/mock-nftCategory";
import { mockNftFile } from "@/shared/domain/test/mock-nftFile";
import { mockValue } from "@/shared/domain/test/mock-nftValue";
import { mockBlockchainInfo } from "@/shared/domain/test/mock-storageInfo";
import { mockStorageInfo } from "@/shared/domain/test/mock-storageInfoNft";
import faker from 'faker'

export const mockfindByIdResponse = () : FindByIdResponse => ({
   userUuid: faker.random.word(),
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
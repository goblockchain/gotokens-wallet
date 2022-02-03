import { FindOrderByIdResponse } from "@/core/domain/models";
import { mockPending } from "@/shared/domain/test/mock-nftPending";
import { mockBlockchainInfo } from "@/shared/domain/test/mock-storageInfo";
import faker from 'faker'

export const mockFindOrderByIdResponse = () : FindOrderByIdResponse => ({
   id: faker.datatype.number(),
   nftid: faker.datatype.number(),
   quantity: faker.datatype.number(),
   shipDate: faker.random.word(),
   blockchainInfo: mockBlockchainInfo(),
   status: mockPending(),
   complete: faker.random.word()
})
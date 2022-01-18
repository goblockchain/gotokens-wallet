import faker from 'faker'
import { PlaceOrderParams } from '@/core/domain/models'
import { mockBlockchainInfo } from '@/shared/domain/test/mock-storageInfo'
import { mockPending } from '@/shared/domain/test/mock-nftPending'

export const mockPlaceOrder = () : PlaceOrderParams => ({
    id: faker.datatype.number(),
    nftid: faker.datatype.number(),
    quantity: faker.datatype.number(),
    shipDate: faker.random.word(),
    blockchainInfo: mockBlockchainInfo(),
    status: mockPending(),
    complete: faker.random.word(),
})

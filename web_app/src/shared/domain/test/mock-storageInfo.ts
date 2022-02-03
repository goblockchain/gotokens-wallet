import faker from 'faker'
import { blockchainInfo } from '@/shared/domain/models'
import { mockEthereum } from './mock-ethereum'

export const mockBlockchainInfo = () : blockchainInfo => ({
    fromAddress:faker.random.word(),
    toAddress: faker.random.word(),
    hashTransaction: faker.random.word(),
    addressTransaction: faker.random.word(),
    protocol: mockEthereum()
})

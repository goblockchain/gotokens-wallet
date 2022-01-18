import faker from 'faker'
import { storageInfo } from '@/shared/domain/models'

export const mockStorageInfo = () : storageInfo => ({
    hashTransaction: faker.random.word(),
    address_transaction: faker.random.word(),
    protocol: faker.random.word()
})

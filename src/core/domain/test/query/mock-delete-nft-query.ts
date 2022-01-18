import faker from 'faker'
import { NftDeleteQuery } from '@/core/domain/models'

export const mockDeleteNftQuery = () : NftDeleteQuery => ({
    apiKey:faker.random.word(),
    nftHash:faker.random.word()
})

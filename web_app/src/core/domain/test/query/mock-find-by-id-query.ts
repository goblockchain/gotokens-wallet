import faker from 'faker'
import { NftHashQuery } from '@/core/domain/models'

export const mockFindByIdQuery = () : NftHashQuery => ({
    nftHash:faker.random.word()
})

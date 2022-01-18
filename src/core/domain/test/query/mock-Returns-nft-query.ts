import faker from 'faker'
import { UserIdQuery } from '@/core/domain/models'

export const mockReturnsNft = () : UserIdQuery => ({
    userId:faker.random.word()
})

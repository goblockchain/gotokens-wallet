import faker from 'faker'
import { UsernameQuery } from '@/core/domain/models'

export const mockUsernameQuery = () : UsernameQuery => ({
    username:faker.random.word()
})

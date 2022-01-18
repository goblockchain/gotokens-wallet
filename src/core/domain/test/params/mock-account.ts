import faker from 'faker'
import { AuthenticationParams } from '@/core/domain/models'

export const mockAuthentication = () : AuthenticationParams => ({
    name: faker.name.firstName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    username:faker.random.word()
})

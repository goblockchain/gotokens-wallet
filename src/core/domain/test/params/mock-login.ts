import faker from 'faker'
import { LoginParams } from '@/core/domain/models'

export const mockLogin = () : LoginParams => ({
    password: faker.internet.password(),
    username:faker.random.word()
})

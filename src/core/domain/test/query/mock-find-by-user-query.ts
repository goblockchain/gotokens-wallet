import faker from 'faker'
import { IdUserQuery } from '@/core/domain/models'

export const mockFindByUserQuery = () : IdUserQuery => ({
    idUser:faker.random.word()
})

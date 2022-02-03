import faker from 'faker'
import { value } from '@/shared/domain/models'

export const mockValue = () : value => ({
   value:faker.datatype.number(),
   coin:faker.random.word()
})

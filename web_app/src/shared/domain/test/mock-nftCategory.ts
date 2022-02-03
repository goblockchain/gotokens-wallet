import faker from 'faker'
import { category } from '@/shared/domain/models'

export const mockCategory = () : category => ({
    type:faker.random.word()
})
import faker from 'faker'
import { nftFile } from '@/shared/domain/models'

export const mockNftFile = () : nftFile => ({
   name:faker.random.word(),
   path:faker.random.word(),
   type: faker.random.word()
})

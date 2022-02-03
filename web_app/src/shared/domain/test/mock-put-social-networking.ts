import faker from 'faker'
import { socialnetworking } from '@/shared/domain/models'

export const mocksocialNetworking = () : socialnetworking => ({
   useruuid:faker.random.word(),
   instagramlink:faker.random.word(),
   photo: faker.random.word(),
   twitterlink: faker.random.word(),
   facebooklink: faker.random.word()
})

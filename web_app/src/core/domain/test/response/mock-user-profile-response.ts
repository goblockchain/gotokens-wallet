import { UserProfileResponse } from "@/core/domain/models";
import { mocksocialNetworking } from "@/shared/domain/test/mock-put-social-networking";
import faker from 'faker'

export const mockUserProfileResponse = () : UserProfileResponse => ({
    id:faker.datatype.number(),
    username:faker.random.word(),
    profileid: faker.random.word(),
    useruuid: faker.random.word(),
    nickname: faker.random.word(),
    bio: faker.random.word(),
    profileimage: faker.random.word(),
    socialNetworking: mocksocialNetworking()
})
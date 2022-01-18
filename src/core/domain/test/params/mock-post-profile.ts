import {ProfileParams } from "@/core/domain/models";
import { mocksocialnetworking } from "@/shared/domain/test/mock-social-networking";
import faker from 'faker'

export const mockPostProfile = () : ProfileParams => ({
    username:faker.random.word(),
    profileid: faker.random.word(),
    useruuid: faker.random.word(),
    nickname: faker.random.word(),
    bio: faker.random.word(),
    profileimage: faker.random.word(),
    socialnetworking: mocksocialnetworking()
})
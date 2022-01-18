import {ProfileSocialNetworkingParams } from "@/core/domain/models";
import faker from 'faker'

export const mockPostProfileSocialNetWork = () : ProfileSocialNetworkingParams => ({
    username:faker.random.word(),
    profileid: faker.random.word(),
    useruuid: faker.random.word(),
    instagramlink: faker.random.word(),
    photo: faker.random.word(),
    twitterlink: faker.random.word(),
    facebooklink: faker.random.word(),
})
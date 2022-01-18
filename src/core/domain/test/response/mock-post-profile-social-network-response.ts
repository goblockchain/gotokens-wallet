import { ProfilePostSocialNetWorkResponse } from "@/core/domain/models";
import faker from 'faker'

export const mockPostPrifileNetWorkResponse = () : ProfilePostSocialNetWorkResponse => ({
    code: faker.datatype.number(),
    type: faker.random.word(),
    message: faker.random.word()
})
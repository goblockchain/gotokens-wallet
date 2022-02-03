import { ProfilePostResponse } from "@/core/domain/models";
import faker from 'faker'

export const mockPostPrifileResponse = () : ProfilePostResponse => ({
    code: faker.datatype.number(),
    type: faker.random.word(),
    message: faker.random.word()
})
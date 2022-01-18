import { TokenValidateResponse } from "@/core/domain/models";
import faker from 'faker'

export const mockTokenValidateResponse = () : TokenValidateResponse => ({
    code: faker.datatype.number(),
    type: faker.random.word(),
    message: faker.random.word()
})
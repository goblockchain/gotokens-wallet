import { DeleteProfileResponse } from "@/core/domain/models";
import faker from 'faker'

export const mockDeleteProfileResponse = () : DeleteProfileResponse => ({
    code:faker.datatype.number(),
    type:faker.random.word(),
    message:faker.random.word(),
})
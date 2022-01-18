import { DeleteNftResponse } from "@/core/domain/models";
import faker from 'faker'

export const mockDeleteNftResponse = () : DeleteNftResponse => ({
    code:faker.datatype.number(),
    type:faker.random.word(),
    message:faker.random.word(),
})
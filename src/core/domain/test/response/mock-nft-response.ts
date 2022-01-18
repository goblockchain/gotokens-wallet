import { NftResponse } from "@/core/domain/models";
import faker from 'faker'

export const mockNftResponse = () : NftResponse => ({
    code:faker.datatype.number(),
    type:faker.random.word(),
    message:faker.random.word(),
})
import { AccountResponse } from "@/core/domain/models";
import faker from 'faker'

export const mockAccountModel = () : AccountResponse => ({
    accessToken: faker.datatype.uuid()
})
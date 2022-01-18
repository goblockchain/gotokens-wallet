import { AccountLogoutResponse } from "@/core/domain/models";
import faker from 'faker'

export const mockAccountLogoutResponse = () : AccountLogoutResponse => ({
    message: faker.random.word()
})
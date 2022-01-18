import { WalletResponse } from "@/core/domain/models";
import faker from 'faker'

export const mockPostWalletResponse = () : WalletResponse => ({
    code: faker.datatype.number(),
    type: faker.random.word(),
    message: faker.random.word()
})
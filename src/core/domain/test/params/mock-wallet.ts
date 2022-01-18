import {WalletParams } from "@/core/domain/models";
import { mockEthereum } from "@/shared/domain/test/mock-ethereum";
import faker from 'faker'

export const mockPostwallet = () : WalletParams => ({
    username:faker.random.word(),
    useruuid: faker.random.word(),
    publicaddress: faker.random.word(),
    providerauthentication: faker.random.word(),
    protocol: mockEthereum()
})
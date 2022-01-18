import { WalletPutResponse } from "@/core/domain/models";
import { mockEthereum } from "@/shared/domain/test/mock-ethereum";
import faker from 'faker'

export const mockWalletPutResponse = () : WalletPutResponse => ({
    username:faker.random.word(),
    useruuid:faker.random.word(),
    publicaddress:faker.random.word(),
    providerauthentication:faker.random.word(),
    protocol:mockEthereum()
})
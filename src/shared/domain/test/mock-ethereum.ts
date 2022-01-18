import faker from 'faker'
import { ETHEREUM } from '@/shared/domain/models'

export const mockEthereum = () : ETHEREUM => ({
    ethereum:faker.random.word()
})

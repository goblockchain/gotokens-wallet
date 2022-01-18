import faker from 'faker'
import { pending } from '@/shared/domain/models'

export const mockPending = () : pending => ({
    pending:faker.random.word()
})

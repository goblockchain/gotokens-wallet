import faker from 'faker'
import { OrderIdQuery } from '@/core/domain/models'

export const mockFindOrderById = () : OrderIdQuery => ({
    orderId:faker.random.word()
})

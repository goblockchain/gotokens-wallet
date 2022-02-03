import faker from 'faker'
import { DeleteOrderByIdQuery } from '@/core/domain/models'

export const mockdeletePurchaseOrderById = () : DeleteOrderByIdQuery => ({
    orderId:faker.random.word()
})

import faker from 'faker'
import { metadata } from '@/shared/domain/models'

export const mockMetadata = () : metadata => ({
    serialNumber:faker.random.word()
})

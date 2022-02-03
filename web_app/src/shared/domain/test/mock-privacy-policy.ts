import faker from 'faker'
import { PrivacyPolicy } from '@/shared/domain/models'

export const mockPrivacyPolicy = () : PrivacyPolicy => ({
    acceptedTerms:faker.datatype.boolean(),
    termsUrl:faker.random.word()
})

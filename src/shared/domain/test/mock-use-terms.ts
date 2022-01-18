import faker from 'faker'
import { UseTerms } from '@/shared/domain/models'

export const mockUseTerms = () : UseTerms => ({
    acceptedTerms:faker.datatype.boolean(),
    termsUrl:faker.random.word()
})

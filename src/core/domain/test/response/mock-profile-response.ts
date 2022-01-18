import { ProfileResponse } from "@/core/domain/models";
import { mockPrivacyPolicy } from "@/shared/domain/test/mock-privacy-policy";
import { mockUseTerms } from "@/shared/domain/test/mock-use-terms";
import faker from 'faker'

export const mockProfileResponse = () : ProfileResponse => ({
    id:faker.datatype.number(),
    username:faker.random.word(),
    firstName:faker.random.word(),
    lastName:faker.random.word(),
    email:faker.random.word(),
    token:faker.random.word(),
    isValidatedToken:faker.random.word(),
    userUuid:faker.random.word(),
    userStatus:faker.datatype.number(),
    privacyPolicy:mockPrivacyPolicy(),
    useTerms:mockUseTerms()
})
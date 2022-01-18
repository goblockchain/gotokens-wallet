import {PrivacyPolicy,UseTerms} from '@/shared/domain/models'

export type ProfileResponse={
    id: number
    username:string
    firstName:string
    lastName: string
    email:string
    token:string
    isValidatedToken:string
    userUuid:string
    userStatus:number
    privacyPolicy:PrivacyPolicy
    useTerms:UseTerms
}
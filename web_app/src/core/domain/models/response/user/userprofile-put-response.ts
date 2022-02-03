import {socialNetworking} from '@/shared/domain/models'

export type UserProfileResponse={
  username: string
  profileid: string
  useruuid: string
  nickname: string
  bio: string
  profileimage: string
  socialNetworking: socialNetworking
}
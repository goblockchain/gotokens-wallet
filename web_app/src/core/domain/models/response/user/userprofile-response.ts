import {socialNetworkingPut} from '@/shared/domain/models'

export type UserProfileResponse={
  id: number
  username: string
  profileid: string
  useruuid: string
  nickname: string
  bio: string
  profileimage: string
  socialNetworking: socialNetworkingPut
}
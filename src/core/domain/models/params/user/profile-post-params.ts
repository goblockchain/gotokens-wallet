import {socialnetworking} from '@/shared/domain/models'

export type ProfileParams = {
    username:string
    profileid:string
    useruuid:string
    nickname:string
    bio:string
    profileimage:string
    socialnetworking:socialnetworking
}
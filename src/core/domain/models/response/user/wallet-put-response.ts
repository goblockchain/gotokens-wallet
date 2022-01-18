import {ETHEREUM} from '@/shared/domain/models'

export type WalletPutResponse={
    username:string
    useruuid: string
    publicaddress: string
    providerauthentication: string
    protocol: ETHEREUM
}
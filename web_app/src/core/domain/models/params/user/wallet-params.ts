import {ETHEREUM} from '@/shared/domain/models'

export type WalletParams = {
    username:string
    useruuid:string
    publicaddress: string
    providerauthentication: string
    protocol: ETHEREUM
}
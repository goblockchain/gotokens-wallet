import { CnpjValidator } from '@/shared/validation/protocols'
import { cnpj } from 'cpf-cnpj-validator'

export class CnpjValidatorAdapter implements CnpjValidator {
  isValid(Cnpj: string): boolean {
    return cnpj.isValid(Cnpj)
  }
}

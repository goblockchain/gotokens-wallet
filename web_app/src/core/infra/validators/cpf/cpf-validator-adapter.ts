import { CpfValidator } from '@/shared/validation/protocols'
import { cpf } from 'cpf-cnpj-validator'

export class CpfValidatorAdapter implements CpfValidator {
  isValid(CPF: string): boolean {
    return cpf.isValid(CPF)
  }
}

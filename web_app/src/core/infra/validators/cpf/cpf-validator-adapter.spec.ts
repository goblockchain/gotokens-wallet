import { CpfValidatorAdapter } from './cpf-validator-adapter'
import { cpf } from 'cpf-cnpj-validator'
import faker from 'faker'

const makeSut = (): CpfValidatorAdapter => {
  return new CpfValidatorAdapter()
}
describe('CpfValidator Adapter', () => {
  test('Should return false if CPF returns false', () => {
    const sut = makeSut()
    jest.spyOn(cpf, 'isValid').mockReturnValueOnce(false)
    const isValid = sut.isValid(faker.datatype.number().toString())
    expect(isValid).toBe(false)
  })

  test('Should return true if CPF returns true', () => {
    const sut = makeSut()
    const isValid = sut.isValid('40652707823')
    expect(isValid).toBe(true)
  })

  test('Should call CPF with correct CPF', () => {
    const sut = makeSut()
    const isCpfSpy = jest.spyOn(cpf, 'isValid')
    const validCpf = '40652707823'
    sut.isValid(validCpf)
    expect(isCpfSpy).toHaveBeenCalledWith(validCpf)
  })
})

import { CnpjValidatorAdapter } from './cnpj-validator-adapter'
import { cnpj } from 'cpf-cnpj-validator'
import faker from 'faker'

const makeSut = (): CnpjValidatorAdapter => {
  return new CnpjValidatorAdapter()
}
describe('CnpjValidator Adapter', () => {
  test('Should return false if CNPJ returns false', () => {
    const sut = makeSut()
    jest.spyOn(cnpj, 'isValid').mockReturnValueOnce(false)
    const isValid = sut.isValid(faker.datatype.number().toString())
    expect(isValid).toBe(false)
  })

  test('Should return true if CNPJ returns true', () => {
    const sut = makeSut()
    const isValid = sut.isValid('33422426000192')
    expect(isValid).toBe(true)
  })

  test('Should call CNPJ with correct CNPJ', () => {
    const sut = makeSut()
    const isCnpjSpy = jest.spyOn(cnpj, 'isValid')
    const validCnpj = '33422426000192'
    sut.isValid(validCnpj)
    expect(isCnpjSpy).toHaveBeenCalledWith(validCnpj)
  })
})

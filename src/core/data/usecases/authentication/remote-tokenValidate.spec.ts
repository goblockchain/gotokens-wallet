import { RemotePostTokenValidate } from "./remote-tokenValidate"
import { HttpClientSpy } from "@/core/data/test"
import { mockTokenValidate } from "@/core/domain/test"
import { InvalidCredentialsError, UnexpectedError } from "@/core/domain/errors"
import faker from 'faker'
import { HttpStatusCode } from "@/core/data/protocols/http"
import { mockTokenValidateResponse } from "@/core/domain/test/response/mock-tokenValidate-response"

type SutTypes = {
    sut:RemotePostTokenValidate
    httpClientSpy: HttpClientSpy<RemotePostTokenValidate.Response>
}

const makeSut = (url: string = faker.internet.url()): SutTypes => {
    const httpClientSpy = new HttpClientSpy<RemotePostTokenValidate.Response>()
    const sut = new RemotePostTokenValidate(url, httpClientSpy)
    return {
        sut,
        httpClientSpy
    }
}

describe('RemotePostTokenValidate', () => {
    test('Should call HttpClient with correct Values', async () => {
        const url = faker.internet.url()
        const {sut, httpClientSpy } = makeSut(url)
        const authenticationParams = mockTokenValidate()
        await sut.performs(authenticationParams)
        expect(httpClientSpy.url).toBe(url+`/user/${authenticationParams.username}/tokenValidate`)
        expect (httpClientSpy.method).toEqual("post")
        expect(httpClientSpy.body).toEqual(authenticationParams)
    })


    test('Should throw InvalidCredentialsError if HttpClient returns 401', async () => {
        const {sut, httpClientSpy } = makeSut()
        httpClientSpy.response = {
            statusCode: HttpStatusCode.unauthorized
        }
        const promisse = sut.performs(mockTokenValidate())
        await expect(promisse).rejects.toThrow(new InvalidCredentialsError())
    })

    test('Should throw UnexpectedError if HttpClient returns 400', async () => {
        const {sut, httpClientSpy } = makeSut()
        httpClientSpy.response = {
            statusCode: HttpStatusCode.badRequest
        }
        const promisse = sut.performs(mockTokenValidate())
        await expect(promisse).rejects.toThrow(new UnexpectedError())
    })

    test('Should throw UnexpectedError if HttpClient returns 500', async () => {
        const {sut, httpClientSpy } = makeSut()
        httpClientSpy.response = {
            statusCode: HttpStatusCode.serverError
        }
        const promisse = sut.performs(mockTokenValidate())
        await expect(promisse).rejects.toThrow(new UnexpectedError())
    })

    test('Should throw UnexpectedError if HttpClient returns 404', async () => {
        const {sut, httpClientSpy } = makeSut()
        httpClientSpy.response = {
            statusCode: HttpStatusCode.notFound
        }
        const promisse = sut.performs(mockTokenValidate())
        await expect(promisse).rejects.toThrow(new UnexpectedError())
    })

    test('Should return an AccountModel if HttpClient returns 200', async () => {
        const {sut, httpClientSpy } = makeSut()
        const httpResult = mockTokenValidateResponse()
        httpClientSpy.response = {
            statusCode: HttpStatusCode.ok,
            body: httpResult
        }
        const account = await sut.performs(mockTokenValidate())
        expect(account).toEqual( httpResult)
    })
})

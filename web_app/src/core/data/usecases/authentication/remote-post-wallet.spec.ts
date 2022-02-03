import { RemotePostWallet } from "./remote-post-wallet"
import { HttpClientSpy } from "@/core/data/test"
import { mockPostwallet } from "@/core/domain/test"
import { InvalidCredentialsError, UnexpectedError } from "@/core/domain/errors"
import faker from 'faker'
import { HttpStatusCode } from "@/core/data/protocols/http"
import { mockPostWalletResponse } from "@/core/domain/test/response/mock-post-wallet-response"

type SutTypes = {
    sut:RemotePostWallet
    httpClientSpy: HttpClientSpy<RemotePostWallet.Response>
}

const makeSut = (url: string = faker.internet.url()): SutTypes => {
    const httpClientSpy = new HttpClientSpy<RemotePostWallet.Response>()
    const sut = new RemotePostWallet(url, httpClientSpy)
    return {
        sut,
        httpClientSpy
    }
}

describe('RemotePostWallet', () => {
    test('Should call HttpClient with correct Values', async () => {
        const url = faker.internet.url()
        const {sut, httpClientSpy } = makeSut(url)
        const authenticationParams = mockPostwallet()
        await sut.performs(authenticationParams)
        expect(httpClientSpy.url).toBe(url+`/user/${authenticationParams.username}/wallet`)
        expect (httpClientSpy.method).toEqual("post")
        expect(httpClientSpy.body).toEqual(authenticationParams)
    })


    test('Should throw InvalidCredentialsError if HttpClient returns 401', async () => {
        const {sut, httpClientSpy } = makeSut()
        httpClientSpy.response = {
            statusCode: HttpStatusCode.unauthorized
        }
        const promisse = sut.performs(mockPostwallet())
        await expect(promisse).rejects.toThrow(new InvalidCredentialsError())
    })

    test('Should throw UnexpectedError if HttpClient returns 400', async () => {
        const {sut, httpClientSpy } = makeSut()
        httpClientSpy.response = {
            statusCode: HttpStatusCode.badRequest
        }
        const promisse = sut.performs(mockPostwallet())
        await expect(promisse).rejects.toThrow(new UnexpectedError())
    })

    test('Should throw UnexpectedError if HttpClient returns 500', async () => {
        const {sut, httpClientSpy } = makeSut()
        httpClientSpy.response = {
            statusCode: HttpStatusCode.serverError
        }
        const promisse = sut.performs(mockPostwallet())
        await expect(promisse).rejects.toThrow(new UnexpectedError())
    })

    test('Should throw UnexpectedError if HttpClient returns 404', async () => {
        const {sut, httpClientSpy } = makeSut()
        httpClientSpy.response = {
            statusCode: HttpStatusCode.notFound
        }
        const promisse = sut.performs(mockPostwallet())
        await expect(promisse).rejects.toThrow(new UnexpectedError())
    })

    test('Should return an AccountModel if HttpClient returns 200', async () => {
        const {sut, httpClientSpy } = makeSut()
        const httpResult = mockPostWalletResponse()
        httpClientSpy.response = {
            statusCode: HttpStatusCode.ok,
            body: httpResult
        }
        const account = await sut.performs(mockPostwallet())
        expect(account).toEqual( httpResult)
    })
})

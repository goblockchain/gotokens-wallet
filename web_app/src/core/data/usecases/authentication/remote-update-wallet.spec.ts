import { RemoteUpdateWallet } from "./remote-update-wallet"
import { HttpClientSpy } from "@/core/data/test"
import {  mockWalletPutResponse } from "@/core/domain/test"
import { InvalidCredentialsError, UnexpectedError } from "@/core/domain/errors"
import faker from 'faker'
import { HttpStatusCode } from "@/core/data/protocols/http"

type SutTypes = {
    sut:RemoteUpdateWallet
    httpClientSpy: HttpClientSpy<RemoteUpdateWallet.Response>
}

const makeSut = (url: string = faker.internet.url()): SutTypes => {
    const httpClientSpy = new HttpClientSpy<RemoteUpdateWallet.Response>()
    const sut = new RemoteUpdateWallet(url, httpClientSpy)
    return {
        sut,
        httpClientSpy
    }
}

describe('RemoteUpdateWallet', () => {
    test('Should call HttpClient with correct Values', async () => {
        const url = faker.internet.url()
        const {sut, httpClientSpy } = makeSut(url)
        const profileParams = mockWalletPutResponse()
        await sut.performs(profileParams)
        expect(httpClientSpy.url).toBe(url+`/user/${profileParams.username}/wallet`)
        expect (httpClientSpy.method).toEqual("put")
        expect(httpClientSpy.body).toEqual(profileParams)
    })


    test('Should throw InvalidCredentialsError if HttpClient returns 401', async () => {
        const {sut, httpClientSpy } = makeSut()
        httpClientSpy.response = {
            statusCode: HttpStatusCode.unauthorized
        }
        const promisse = sut.performs(mockWalletPutResponse())
        await expect(promisse).rejects.toThrow(new InvalidCredentialsError())
    })

    test('Should throw UnexpectedError if HttpClient returns 400', async () => {
        const {sut, httpClientSpy } = makeSut()
        httpClientSpy.response = {
            statusCode: HttpStatusCode.badRequest
        }
        const promisse = sut.performs(mockWalletPutResponse())
        await expect(promisse).rejects.toThrow(new UnexpectedError())
    })

    test('Should throw UnexpectedError if HttpClient returns 500', async () => {
        const {sut, httpClientSpy } = makeSut()
        httpClientSpy.response = {
            statusCode: HttpStatusCode.serverError
        }
        const promisse = sut.performs(mockWalletPutResponse())
        await expect(promisse).rejects.toThrow(new UnexpectedError())
    })

    test('Should throw UnexpectedError if HttpClient returns 404', async () => {
        const {sut, httpClientSpy } = makeSut()
        httpClientSpy.response = {
            statusCode: HttpStatusCode.notFound
        }
        const promisse = sut.performs(mockWalletPutResponse())
        await expect(promisse).rejects.toThrow(new UnexpectedError())
    })

    test('Should return an Update wallet user if HttpClient returns 200', async () => {
        const {sut, httpClientSpy } = makeSut()
        const httpResult = mockWalletPutResponse()
        httpClientSpy.response = {
            statusCode: HttpStatusCode.ok,
            body: httpResult
        }
        const profile = await sut.performs(mockWalletPutResponse())
        expect(profile).toEqual( httpResult)
    })
})

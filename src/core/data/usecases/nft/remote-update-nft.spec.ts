import { RemoteUpdateNft } from "./remote-update-nft"
import { HttpClientSpy } from "@/core/data/test"
import {  mockNftUpdateResponse } from "@/core/domain/test"
import { InvalidCredentialsError, UnexpectedError } from "@/core/domain/errors"
import faker from 'faker'
import { HttpStatusCode } from "@/core/data/protocols/http"

type SutTypes = {
    sut:RemoteUpdateNft
    httpClientSpy: HttpClientSpy<RemoteUpdateNft.Response>
}

const makeSut = (url: string = faker.internet.url()): SutTypes => {
    const httpClientSpy = new HttpClientSpy<RemoteUpdateNft.Response>()
    const sut = new RemoteUpdateNft(url, httpClientSpy)
    return {
        sut,
        httpClientSpy
    }
}

describe('RemoteUpdateNft', () => {
    test('Should call HttpClient with correct Values', async () => {
        const url = faker.internet.url()
        const {sut, httpClientSpy } = makeSut(url)
        const profileParams = mockNftUpdateResponse()
        await sut.performs(profileParams)
        expect(httpClientSpy.url).toBe(url+`/nft` )
        expect (httpClientSpy.method).toEqual("put")
        expect(httpClientSpy.body).toEqual(profileParams)
    })


    test('Should throw InvalidCredentialsError if HttpClient returns 401', async () => {
        const {sut, httpClientSpy } = makeSut()
        httpClientSpy.response = {
            statusCode: HttpStatusCode.unauthorized
        }
        const promisse = sut.performs(mockNftUpdateResponse())
        await expect(promisse).rejects.toThrow(new InvalidCredentialsError())
    })

    test('Should throw UnexpectedError if HttpClient returns 400', async () => {
        const {sut, httpClientSpy } = makeSut()
        httpClientSpy.response = {
            statusCode: HttpStatusCode.badRequest
        }
        const promisse = sut.performs(mockNftUpdateResponse())
        await expect(promisse).rejects.toThrow(new UnexpectedError())
    })

    test('Should throw UnexpectedError if HttpClient returns 500', async () => {
        const {sut, httpClientSpy } = makeSut()
        httpClientSpy.response = {
            statusCode: HttpStatusCode.serverError
        }
        const promisse = sut.performs(mockNftUpdateResponse())
        await expect(promisse).rejects.toThrow(new UnexpectedError())
    })

    test('Should throw UnexpectedError if HttpClient returns 404', async () => {
        const {sut, httpClientSpy } = makeSut()
        httpClientSpy.response = {
            statusCode: HttpStatusCode.notFound
        }
        const promisse = sut.performs(mockNftUpdateResponse())
        await expect(promisse).rejects.toThrow(new UnexpectedError())
    })

    test('Should return an Updated NFT if HttpClient returns 200', async () => {
        const {sut, httpClientSpy } = makeSut()
        const httpResult = mockNftUpdateResponse()
        httpClientSpy.response = {
            statusCode: HttpStatusCode.ok,
            body: httpResult
        }
        const profile = await sut.performs(mockNftUpdateResponse())
        expect(profile).toEqual( httpResult)
    })
})

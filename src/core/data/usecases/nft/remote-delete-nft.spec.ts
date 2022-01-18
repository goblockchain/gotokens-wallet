import { RemoteDeleteNft } from "./remote-delete-nft"
import { HttpClientSpy } from "@/core/data/test"
import {  mockDeleteNftQuery, mockDeleteNftResponse } from "@/core/domain/test"
import { InvalidCredentialsError, UnexpectedError } from "@/core/domain/errors"
import faker from 'faker'
import { HttpStatusCode } from "@/core/data/protocols/http"

type SutTypes = {
    sut:RemoteDeleteNft
    httpClientSpy: HttpClientSpy<RemoteDeleteNft.Response>
}

const makeSut = (url: string = faker.internet.url()): SutTypes => {
    const httpClientSpy = new HttpClientSpy<RemoteDeleteNft.Response>()
    const sut = new RemoteDeleteNft(url, httpClientSpy)
    return {
        sut,
        httpClientSpy
    }
}

describe('RemoteDeleteNft', () => {
    test('Should call HttpClient with correct Values', async () => {
        const url = faker.internet.url()
        const {sut, httpClientSpy } = makeSut(url)
        const profileDeleteByUsernameQuery = mockDeleteNftQuery()
        await sut.performs(profileDeleteByUsernameQuery)
        expect(httpClientSpy.url).toBe(url+`/nft/${profileDeleteByUsernameQuery.apiKey, profileDeleteByUsernameQuery.nftHash }`)
        expect (httpClientSpy.method).toEqual("delete")
        expect(httpClientSpy.body).toEqual(null)
    })


    test('Should throw InvalidCredentialsError if HttpClient returns 401', async () => {
        const {sut, httpClientSpy } = makeSut()
        httpClientSpy.response = {
            statusCode: HttpStatusCode.unauthorized
        }
        const promisse = sut.performs(mockDeleteNftQuery())
        await expect(promisse).rejects.toThrow(new InvalidCredentialsError())
    })

    test('Should throw UnexpectedError if HttpClient returns 400', async () => {
        const {sut, httpClientSpy } = makeSut()
        httpClientSpy.response = {
            statusCode: HttpStatusCode.badRequest
        }
        const promisse = sut.performs(mockDeleteNftQuery())
        await expect(promisse).rejects.toThrow(new UnexpectedError())
    })

    test('Should throw UnexpectedError if HttpClient returns 500', async () => {
        const {sut, httpClientSpy } = makeSut()
        httpClientSpy.response = {
            statusCode: HttpStatusCode.serverError
        }
        const promisse = sut.performs(mockDeleteNftQuery())
        await expect(promisse).rejects.toThrow(new UnexpectedError())
    })

    test('Should throw UnexpectedError if HttpClient returns 404', async () => {
        const {sut, httpClientSpy } = makeSut()
        httpClientSpy.response = {
            statusCode: HttpStatusCode.notFound
        }
        const promisse = sut.performs(mockDeleteNftQuery())
        await expect(promisse).rejects.toThrow(new UnexpectedError())
    })

    test('Should return an Deleted Nft if HttpClient returns 200', async () => {
        const {sut, httpClientSpy } = makeSut()
        const httpResult = mockDeleteNftResponse()
        httpClientSpy.response = {
            statusCode: HttpStatusCode.ok,
            body: httpResult
        }
        const profile = await sut.performs(mockDeleteNftQuery())
        expect(profile).toEqual( httpResult)
    })
})

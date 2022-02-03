import { RemoteNft } from "./remote-nft"
import { HttpClientSpy } from "@/core/data/test"
import { mockNftResponse, mockNft } from "@/core/domain/test"
import { InvalidCredentialsError, UnexpectedError } from "@/core/domain/errors"
import faker from 'faker'
import { HttpStatusCode } from "@/core/data/protocols/http"

type SutTypes = {
    sut:RemoteNft
    httpClientSpy: HttpClientSpy<RemoteNft.Response>
}

const makeSut = (url: string = faker.internet.url()): SutTypes => {
    const httpClientSpy = new HttpClientSpy<RemoteNft.Response>()
    const sut = new RemoteNft(url, httpClientSpy)
    return {
        sut,
        httpClientSpy
    }
}

describe('RemoteNft', () => {
    test('Should call HttpClient with correct Values', async () => {
        const url = faker.internet.url()
        const {sut, httpClientSpy } = makeSut(url)
        const authenticationParams = mockNft()
        await sut.performs(authenticationParams)
        expect(httpClientSpy.url).toBe(url+`/nft`)
        expect (httpClientSpy.method).toEqual("post")
        expect(httpClientSpy.body).toEqual(authenticationParams)
    })


    test('Should throw InvalidCredentialsError if HttpClient returns 401', async () => {
        const {sut, httpClientSpy } = makeSut()
        httpClientSpy.response = {
            statusCode: HttpStatusCode.unauthorized
        }
        const promisse = sut.performs(mockNft())
        await expect(promisse).rejects.toThrow(new InvalidCredentialsError())
    })

    test('Should throw UnexpectedError if HttpClient returns 400', async () => {
        const {sut, httpClientSpy } = makeSut()
        httpClientSpy.response = {
            statusCode: HttpStatusCode.badRequest
        }
        const promisse = sut.performs(mockNft())
        await expect(promisse).rejects.toThrow(new UnexpectedError())
    })

    test('Should throw UnexpectedError if HttpClient returns 500', async () => {
        const {sut, httpClientSpy } = makeSut()
        httpClientSpy.response = {
            statusCode: HttpStatusCode.serverError
        }
        const promisse = sut.performs(mockNft())
        await expect(promisse).rejects.toThrow(new UnexpectedError())
    })

    test('Should throw UnexpectedError if HttpClient returns 404', async () => {
        const {sut, httpClientSpy } = makeSut()
        httpClientSpy.response = {
            statusCode: HttpStatusCode.notFound
        }
        const promisse = sut.performs(mockNft())
        await expect(promisse).rejects.toThrow(new UnexpectedError())
    })

    test('Should return a New NFT if HttpClient returns 200', async () => {
        const {sut, httpClientSpy } = makeSut()
        const httpResult = mockNftResponse()
        httpClientSpy.response = {
            statusCode: HttpStatusCode.ok,
            body: httpResult
        }
        const account = await sut.performs(mockNft())
        expect(account).toEqual( httpResult)
    })
})

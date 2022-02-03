import { RemoteNftCreateFixedPrice } from "./remote-nft-create-fixed-price"
import { HttpClientSpy } from "@/core/data/test"
import { mockNftFixedPrice, mockNftCreateFixedPrice } from "@/core/domain/test"
import { InvalidCredentialsError, UnexpectedError } from "@/core/domain/errors"
import faker from 'faker'
import { HttpStatusCode } from "@/core/data/protocols/http"

type SutTypes = {
    sut:RemoteNftCreateFixedPrice
    httpClientSpy: HttpClientSpy<RemoteNftCreateFixedPrice.Response>
}

const makeSut = (url: string = faker.internet.url()): SutTypes => {
    const httpClientSpy = new HttpClientSpy<RemoteNftCreateFixedPrice.Response>()
    const sut = new RemoteNftCreateFixedPrice(url, httpClientSpy)
    return {
        sut,
        httpClientSpy
    }
}

describe('RemoteNftCreateFixedPrice', () => {
    test('Should call HttpClient with correct Values', async () => {
        const url = faker.internet.url()
        const {sut, httpClientSpy } = makeSut(url)
        const authenticationParams = mockNftCreateFixedPrice()
        await sut.performs(authenticationParams)
        expect(httpClientSpy.url).toBe(url+`/nft/create/fixed-price`)
        expect (httpClientSpy.method).toEqual("post")
        expect(httpClientSpy.body).toEqual(authenticationParams)
    })


    test('Should throw InvalidCredentialsError if HttpClient returns 401', async () => {
        const {sut, httpClientSpy } = makeSut()
        httpClientSpy.response = {
            statusCode: HttpStatusCode.unauthorized
        }
        const promisse = sut.performs(mockNftCreateFixedPrice())
        await expect(promisse).rejects.toThrow(new InvalidCredentialsError())
    })

    test('Should throw UnexpectedError if HttpClient returns 400', async () => {
        const {sut, httpClientSpy } = makeSut()
        httpClientSpy.response = {
            statusCode: HttpStatusCode.badRequest
        }
        const promisse = sut.performs(mockNftCreateFixedPrice())
        await expect(promisse).rejects.toThrow(new UnexpectedError())
    })

    test('Should throw UnexpectedError if HttpClient returns 500', async () => {
        const {sut, httpClientSpy } = makeSut()
        httpClientSpy.response = {
            statusCode: HttpStatusCode.serverError
        }
        const promisse = sut.performs(mockNftCreateFixedPrice())
        await expect(promisse).rejects.toThrow(new UnexpectedError())
    })

    test('Should throw UnexpectedError if HttpClient returns 404', async () => {
        const {sut, httpClientSpy } = makeSut()
        httpClientSpy.response = {
            statusCode: HttpStatusCode.notFound
        }
        const promisse = sut.performs(mockNftCreateFixedPrice())
        await expect(promisse).rejects.toThrow(new UnexpectedError())
    })

    test('Should return an AccountModel if HttpClient returns 200', async () => {
        const {sut, httpClientSpy } = makeSut()
        const httpResult = mockNftFixedPrice()
        httpClientSpy.response = {
            statusCode: HttpStatusCode.ok,
            body: httpResult
        }
        const account = await sut.performs(mockNftCreateFixedPrice())
        expect(account).toEqual( httpResult)
    })
})

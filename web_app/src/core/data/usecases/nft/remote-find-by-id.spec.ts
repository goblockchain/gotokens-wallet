import { RemoteFindById } from "./remote-find-by-id"
import { HttpClientSpy } from "@/core/data/test"
import { mockFindByIdQuery, mockfindByIdResponse } from "@/core/domain/test"
import { InvalidCredentialsError, UnexpectedError } from "@/core/domain/errors"
import faker from 'faker'
import { HttpStatusCode } from "@/core/data/protocols/http"

type SutTypes = {
    sut:RemoteFindById
    httpClientSpy: HttpClientSpy<RemoteFindById.Response>
}

const makeSut = (url: string = faker.internet.url()): SutTypes => {
    const httpClientSpy = new HttpClientSpy<RemoteFindById.Response>()
    const sut = new RemoteFindById(url, httpClientSpy)
    return {
        sut,
        httpClientSpy
    }
}

describe('RemoteFindById', () => {
    test('Should call HttpClient with correct Values', async () => {
        const url = faker.internet.url()
        const {sut, httpClientSpy } = makeSut(url)
        const usernameQuery = mockFindByIdQuery()
        await sut.performs(usernameQuery)
        expect(httpClientSpy.url).toBe(url+`/nft/${usernameQuery.nftHash}`)
        expect (httpClientSpy.method).toEqual("get")
        expect(httpClientSpy.body).toEqual(null)
    })


    test('Should throw InvalidCredentialsError if HttpClient returns 401', async () => {
        const {sut, httpClientSpy } = makeSut()
        httpClientSpy.response = {
            statusCode: HttpStatusCode.unauthorized
        }
        const promisse = sut.performs(mockFindByIdQuery())
        await expect(promisse).rejects.toThrow(new InvalidCredentialsError())
    })

    test('Should throw UnexpectedError if HttpClient returns 400', async () => {
        const {sut, httpClientSpy } = makeSut()
        httpClientSpy.response = {
            statusCode: HttpStatusCode.badRequest
        }
        const promisse = sut.performs(mockFindByIdQuery())
        await expect(promisse).rejects.toThrow(new UnexpectedError())
    })

    test('Should throw UnexpectedError if HttpClient returns 500', async () => {
        const {sut, httpClientSpy } = makeSut()
        httpClientSpy.response = {
            statusCode: HttpStatusCode.serverError
        }
        const promisse = sut.performs(mockFindByIdQuery())
        await expect(promisse).rejects.toThrow(new UnexpectedError())
    })

    test('Should throw UnexpectedError if HttpClient returns 404', async () => {
        const {sut, httpClientSpy } = makeSut()
        httpClientSpy.response = {
            statusCode: HttpStatusCode.notFound
        }
        const promisse = sut.performs(mockFindByIdQuery())
        await expect(promisse).rejects.toThrow(new UnexpectedError())
    })

    test('Should return a Nft by Id if HttpClient returns 200', async () => {
        const {sut, httpClientSpy } = makeSut()
        const httpResult = mockfindByIdResponse()
        httpClientSpy.response = {
            statusCode: HttpStatusCode.ok,
            body: httpResult
        }
        const profile = await sut.performs(mockFindByIdQuery())
        expect(profile).toEqual( httpResult)
    })
})

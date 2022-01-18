import { RemoteProfile } from "./remote-profile"
import { HttpClientSpy } from "@/core/data/test"
import { mockUsernameQuery, mockProfileResponse } from "@/core/domain/test"
import { InvalidCredentialsError, UnexpectedError } from "@/core/domain/errors"
import faker from 'faker'
import { HttpStatusCode } from "@/core/data/protocols/http"

type SutTypes = {
    sut:RemoteProfile
    httpClientSpy: HttpClientSpy<RemoteProfile.Response>
}

const makeSut = (url: string = faker.internet.url()): SutTypes => {
    const httpClientSpy = new HttpClientSpy<RemoteProfile.Response>()
    const sut = new RemoteProfile(url, httpClientSpy)
    return {
        sut,
        httpClientSpy
    }
}

describe('RemoteProfile', () => {
    test('Should call HttpClient with correct Values', async () => {
        const url = faker.internet.url()
        const {sut, httpClientSpy } = makeSut(url)
        const usernameQuery = mockUsernameQuery()
        await sut.performs(usernameQuery)
        expect(httpClientSpy.url).toBe(url+`/user/${usernameQuery.username}`)
        expect (httpClientSpy.method).toEqual("get")
        expect(httpClientSpy.body).toEqual(null)
    })


    test('Should throw InvalidCredentialsError if HttpClient returns 401', async () => {
        const {sut, httpClientSpy } = makeSut()
        httpClientSpy.response = {
            statusCode: HttpStatusCode.unauthorized
        }
        const promisse = sut.performs(mockUsernameQuery())
        await expect(promisse).rejects.toThrow(new InvalidCredentialsError())
    })

    test('Should throw UnexpectedError if HttpClient returns 400', async () => {
        const {sut, httpClientSpy } = makeSut()
        httpClientSpy.response = {
            statusCode: HttpStatusCode.badRequest
        }
        const promisse = sut.performs(mockUsernameQuery())
        await expect(promisse).rejects.toThrow(new UnexpectedError())
    })

    test('Should throw UnexpectedError if HttpClient returns 500', async () => {
        const {sut, httpClientSpy } = makeSut()
        httpClientSpy.response = {
            statusCode: HttpStatusCode.serverError
        }
        const promisse = sut.performs(mockUsernameQuery())
        await expect(promisse).rejects.toThrow(new UnexpectedError())
    })

    test('Should throw UnexpectedError if HttpClient returns 404', async () => {
        const {sut, httpClientSpy } = makeSut()
        httpClientSpy.response = {
            statusCode: HttpStatusCode.notFound
        }
        const promisse = sut.performs(mockUsernameQuery())
        await expect(promisse).rejects.toThrow(new UnexpectedError())
    })

    test('Should return an Profile if HttpClient returns 200', async () => {
        const {sut, httpClientSpy } = makeSut()
        const httpResult = mockProfileResponse()
        httpClientSpy.response = {
            statusCode: HttpStatusCode.ok,
            body: httpResult
        }
        const profile = await sut.performs(mockUsernameQuery())
        expect(profile).toEqual( httpResult)
    })
})

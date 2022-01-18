import { RemoteDeleteProfile } from "./remote-delete-profile"
import { HttpClientSpy } from "@/core/data/test"
import {  mockUsernameQuery, mockDeleteProfileResponse } from "@/core/domain/test"
import { InvalidCredentialsError, UnexpectedError } from "@/core/domain/errors"
import faker from 'faker'
import { HttpStatusCode } from "@/core/data/protocols/http"

type SutTypes = {
    sut:RemoteDeleteProfile
    httpClientSpy: HttpClientSpy<RemoteDeleteProfile.Response>
}

const makeSut = (url: string = faker.internet.url()): SutTypes => {
    const httpClientSpy = new HttpClientSpy<RemoteDeleteProfile.Response>()
    const sut = new RemoteDeleteProfile(url, httpClientSpy)
    return {
        sut,
        httpClientSpy
    }
}

describe('RemoteDeleteProfile', () => {
    test('Should call HttpClient with correct Values', async () => {
        const url = faker.internet.url()
        const {sut, httpClientSpy } = makeSut(url)
        const profileDeleteByUsernameQuery = mockUsernameQuery()
        await sut.performs(profileDeleteByUsernameQuery)
        expect(httpClientSpy.url).toBe(url+`/user/${profileDeleteByUsernameQuery.username}`)
        expect (httpClientSpy.method).toEqual("delete")
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

    test('Should return an Deleted Profile if HttpClient returns 200', async () => {
        const {sut, httpClientSpy } = makeSut()
        const httpResult = mockDeleteProfileResponse()
        httpClientSpy.response = {
            statusCode: HttpStatusCode.ok,
            body: httpResult
        }
        const profile = await sut.performs(mockUsernameQuery())
        expect(profile).toEqual( httpResult)
    })
})

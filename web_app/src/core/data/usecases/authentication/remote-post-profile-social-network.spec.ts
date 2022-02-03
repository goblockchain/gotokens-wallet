import { RemotePostProfileSocialNetWork } from "./remote-post-profile-social-network"
import { HttpClientSpy } from "@/core/data/test"
import { mockPostPrifileNetWorkResponse, mockPostProfileSocialNetWork } from "@/core/domain/test"
import { InvalidCredentialsError, UnexpectedError } from "@/core/domain/errors"
import faker from 'faker'
import { HttpStatusCode } from "@/core/data/protocols/http"

type SutTypes = {
    sut:RemotePostProfileSocialNetWork
    httpClientSpy: HttpClientSpy<RemotePostProfileSocialNetWork.Response>
}

const makeSut = (url: string = faker.internet.url()): SutTypes => {
    const httpClientSpy = new HttpClientSpy<RemotePostProfileSocialNetWork.Response>()
    const sut = new RemotePostProfileSocialNetWork(url, httpClientSpy)
    return {
        sut,
        httpClientSpy
    }
}

describe('RemotePostProfileSocialNetWork', () => {
    test('Should call HttpClient with correct Values', async () => {
        const url = faker.internet.url()
        const {sut, httpClientSpy } = makeSut(url)
        const authenticationParams = mockPostProfileSocialNetWork()
        await sut.performs(authenticationParams)
        expect(httpClientSpy.url).toBe(url+`/${authenticationParams.username}/profile/${authenticationParams.profileid}/socialNetworking`)
        expect (httpClientSpy.method).toEqual("post")
        expect(httpClientSpy.body).toEqual(authenticationParams)
    })


    test('Should throw InvalidCredentialsError if HttpClient returns 401', async () => {
        const {sut, httpClientSpy } = makeSut()
        httpClientSpy.response = {
            statusCode: HttpStatusCode.unauthorized
        }
        const promisse = sut.performs(mockPostProfileSocialNetWork())
        await expect(promisse).rejects.toThrow(new InvalidCredentialsError())
    })

    test('Should throw UnexpectedError if HttpClient returns 400', async () => {
        const {sut, httpClientSpy } = makeSut()
        httpClientSpy.response = {
            statusCode: HttpStatusCode.badRequest
        }
        const promisse = sut.performs(mockPostProfileSocialNetWork())
        await expect(promisse).rejects.toThrow(new UnexpectedError())
    })

    test('Should throw UnexpectedError if HttpClient returns 500', async () => {
        const {sut, httpClientSpy } = makeSut()
        httpClientSpy.response = {
            statusCode: HttpStatusCode.serverError
        }
        const promisse = sut.performs(mockPostProfileSocialNetWork())
        await expect(promisse).rejects.toThrow(new UnexpectedError())
    })

    test('Should throw UnexpectedError if HttpClient returns 404', async () => {
        const {sut, httpClientSpy } = makeSut()
        httpClientSpy.response = {
            statusCode: HttpStatusCode.notFound
        }
        const promisse = sut.performs(mockPostProfileSocialNetWork())
        await expect(promisse).rejects.toThrow(new UnexpectedError())
    })

    test('Should return an AccountModel if HttpClient returns 200', async () => {
        const {sut, httpClientSpy } = makeSut()
        const httpResult = mockPostPrifileNetWorkResponse()
        httpClientSpy.response = {
            statusCode: HttpStatusCode.ok,
            body: httpResult
        }
        const account = await sut.performs(mockPostProfileSocialNetWork())
        expect(account).toEqual( httpResult)
    })
})

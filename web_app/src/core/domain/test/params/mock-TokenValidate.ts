import {TokenValidateParams } from "@/core/domain/models";
import faker from 'faker'

export const mockTokenValidate = () : TokenValidateParams => ({
    username:faker.random.word(),
    token:faker.random.word()
})
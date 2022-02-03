import { HttpClient, HttpResponse } from '@/core/data/protocols/http'

import axios, { AxiosResponse } from 'axios'

export class AxiosHttpClient implements HttpClient {
  async request(data: HttpClient.Request): Promise<HttpResponse> {
    let axiosResponse: AxiosResponse<any>
    try {
      axiosResponse = await axios.request({ url: data.url, method: data.method, data: data.body, headers: data.headers })
    } catch (error) {
      axiosResponse = error.response
    }
    return {
      statusCode: axiosResponse.status,
      body: axiosResponse.data
    }
  }
}

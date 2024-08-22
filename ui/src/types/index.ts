export type IHttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'

export interface IApiConfig {
  url: string
  method: IHttpMethod
}

export interface IApiSuccessResponse<T> {
  isOk: true
  result: T
}

export interface IApiError {
  message: string
}

interface IApiErrorResponse {
  isOk: false
  error: IApiError
}

export type IApiResponse<T> = IApiSuccessResponse<T> | IApiErrorResponse
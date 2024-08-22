import type { IApiResponse, IApiSuccessResponse, IHttpMethod } from '@ui/types'

interface IHttpRequestConfig {
  url: string
  method: IHttpMethod
  body?: unknown
  config?: RequestInit
  pathParams?: Record<string, string>
}

const headers: HeadersInit = {
  'Content-Type': 'application/json',
}

export async function httpRequest<T>({
  url,
  method,
  body,
  pathParams,
  config,
}: IHttpRequestConfig): Promise<IApiResponse<T>> {
  const httpConfig: RequestInit = {
    method,
    headers,
    ...config,
  }

  try {
    if (body)
      httpConfig.body = JSON.stringify(body)

    let urlConfig = url

    if (pathParams) {
      Object.entries(pathParams).forEach(([key, value]) => {
        urlConfig = urlConfig.replace(`{${key}}`, value)
      })
    }

    const fetchResponse = await fetch(urlConfig, httpConfig)

    if (!fetchResponse.ok) {
      const message = fetchResponse.statusText

      return {
        isOk: false,
        error: { message },
      }
    }

    const response = await fetchResponse.json() as IApiSuccessResponse<T>

    return {
      isOk: true,
      result: response.result,
    }
  }

  catch (error: unknown) {
    const message = (error as Error)?.message ?? ''
    return {
      isOk: false,
      error: {
        message,
      },
    }
  }
}

import type { IApiConfig } from '@ui/types'

const BASE_URL = 'https://5clvrxlaph.execute-api.us-east-1.amazonaws.com/Prod'
const url = `${BASE_URL}/todo`

export const GET_ALL_TODOS_API_CONFIG: IApiConfig = {
  method: 'GET',
  url,
}

export const CREATE_TODO_API_CONFIG: IApiConfig = {
  method: 'POST',
  url,
}

export const UPDATE_TODO_API_CONFIG: IApiConfig = {
  method: 'PATCH',
  url: `${url}/{id}`,
}

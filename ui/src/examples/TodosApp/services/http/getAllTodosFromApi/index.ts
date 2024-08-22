import { httpRequest } from '@ui/clients/http'
import { GET_ALL_TODOS_API_CONFIG } from '@ui/examples/TodosApp/configs'
import type { ITodo } from '@ui/examples/TodosApp/types'
import type { IApiResponse } from '@ui/types'

export async function getAllTodosFromApi(): Promise<IApiResponse<ITodo[]>> {
  return httpRequest<ITodo[]>(GET_ALL_TODOS_API_CONFIG)
}

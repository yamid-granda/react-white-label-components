import { httpRequest } from '@ui/clients/http'
import { CREATE_TODO_API_CONFIG } from '@ui/examples/TodosApp/configs'
import type { ICreateTodoBody, ITodo } from '@ui/examples/TodosApp/types'
import type { IApiResponse } from '@ui/types'

interface ICreateTodoFromApi {
  body: ICreateTodoBody
}

export async function createTodoFromApi({
  body,
}: ICreateTodoFromApi): Promise<IApiResponse<ITodo>> {
  return httpRequest<ITodo>({
    ...CREATE_TODO_API_CONFIG,
    body,
  })
}

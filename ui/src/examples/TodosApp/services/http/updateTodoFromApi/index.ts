import { httpRequest } from '@ui/clients/http'
import { UPDATE_TODO_API_CONFIG } from '@ui/examples/TodosApp/configs'
import type { ITodo, IUpdateTodoBody } from '@ui/examples/TodosApp/types'
import type { IApiResponse } from '@ui/types'

interface IUpdateTodoFromApiConfig {
  id: string
  body: IUpdateTodoBody
}

export async function updateTodoFromApi({
  id,
  body,
}: IUpdateTodoFromApiConfig): Promise<IApiResponse<ITodo>> {
  return httpRequest<ITodo>({
    ...UPDATE_TODO_API_CONFIG,
    body,
    pathParams: { id },
  })
}

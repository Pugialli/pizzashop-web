import { http, HttpResponse } from 'msw'

import { GetManagedRestaurantResponse } from '../get-managed-restaurant'

export const getManagedRestaurantMock = http.get<
  never,
  never,
  GetManagedRestaurantResponse
>('/managed-restaurant', () => {
  return HttpResponse.json({
    id: 'custom-restaurant-id',
    name: "Fulano's Pizza",
    description: 'A melhor pizza do bairro',
    managerId: 'custom-user-id',
    createdAt: new Date(),
    updatedAt: null,
  })
})

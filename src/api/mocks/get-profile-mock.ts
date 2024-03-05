import { http, HttpResponse } from 'msw'

import { GetProfileResponse } from '../get-profile'

export const getProfileMock = http.get<never, never, GetProfileResponse>(
  '/me',
  () => {
    return HttpResponse.json({
      id: 'custom-user-id',
      name: 'Fulano de Tal',
      email: 'fulano@exemplo.com.br',
      phone: '(21) 99999-9999',
      role: 'manager',
      createdAt: new Date(),
      updatedAt: null,
    })
  },
)

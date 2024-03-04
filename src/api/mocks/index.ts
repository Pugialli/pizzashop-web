import { setupWorker } from 'msw/browser'

import { env } from '@/env'

import { getDailyRevenueInPeriodMock } from './get-daily-revenue-in-period-mock.ts'
import { getDayOrdersAmountMock } from './get-day-orders-amount-mock.ts'
import { getMonthCanceledOrdersAmountMock } from './get-month-canceled-orders-amount-mock.ts'
import { getMonthOrdersAmountMock } from './get-month-orders-amount-mock'
import { getMonthRevenueMock } from './get-month-revenue-mock.ts'
import { getPopularProductsMock } from './get-popular-products-mock.ts'
import { registerRestaurantMock } from './register-restaurant-mock'
import { signInMock } from './sign-in-mock'

export const worker = setupWorker(
  signInMock,
  registerRestaurantMock,
  getMonthOrdersAmountMock,
  getMonthCanceledOrdersAmountMock,
  getDayOrdersAmountMock,
  getDailyRevenueInPeriodMock,
  getPopularProductsMock,
  getMonthRevenueMock,
)

export async function enableMSW() {
  if (env.MODE !== 'test') {
    return
  }
  await worker.start()
}

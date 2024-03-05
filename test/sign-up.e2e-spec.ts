import { expect, test } from '@playwright/test'

test('sign up successfully', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })

  await page.getByLabel('Nome do estabelecimento').fill('Pizza Shop')
  await page.getByLabel('Seu nome').fill('Fulano de Tal')
  await page.getByLabel('Seu e-mail').fill('fulano@exemplo.com.br')
  await page.getByLabel('Seu celular').fill('(21) 999999999')

  await page.getByRole('button', { name: 'Finalizar cadastro' }).click()

  const toast = page.getByText('Restaurante cadastrado com sucesso!')
  await expect(toast).toBeVisible()
})

test('sign up error', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })

  await page.getByLabel('Nome do estabelecimento').fill('Batata Shop')
  await page.getByLabel('Seu nome').fill('Fulano de Tal')
  await page.getByLabel('Seu e-mail').fill('fulano@exemplo.com.br')
  await page.getByLabel('Seu celular').fill('(21) 999999999')

  await page.getByRole('button', { name: 'Finalizar cadastro' }).click()

  const toast = page.getByText('Error ao cadastrar restaurante')
  await expect(toast).toBeVisible()
})

test('navigate to login page', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })

  await page.getByRole('link', { name: 'Fazer login' }).click()

  expect(page.url()).toContain('/sign-in')
})

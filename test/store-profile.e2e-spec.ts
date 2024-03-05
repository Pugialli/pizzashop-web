import { expect, test } from '@playwright/test'

test('update profile successfully', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  await page.getByRole('button', { name: "Fulano's Pizza" }).click()
  await page.getByRole('menuitem', { name: 'Perfil da loja' }).click()

  await page.getByLabel('Nome').fill('Teste Pizza')
  await page.getByLabel('Descrição').fill('Outra descrição')

  await page.getByRole('button', { name: 'Salvar' }).click()

  await page.waitForLoadState('networkidle')

  const toast = page.getByText('Perfil atualizado com sucesso!')
  await expect(toast).toBeVisible()

  await page.getByRole('button', { name: 'Close' }).click()

  await expect(page.getByRole('button', { name: 'Teste Pizza' })).toBeVisible()
})

test('update profile error', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  await page.getByRole('button', { name: "Fulano's Pizza" }).click()
  await page.getByRole('menuitem', { name: 'Perfil da loja' }).click()

  await page.getByLabel('Nome').fill('Batata Pizza')
  await page.getByLabel('Descrição').fill('Outra descrição')

  await page.getByRole('button', { name: 'Salvar' }).click()

  await page.waitForLoadState('networkidle')

  const toast = page.getByText('Falha ao atualizar o perfil, tente novamente.')
  await expect(toast).toBeVisible()

  await page.getByRole('button', { name: 'Close' }).click()

  await expect(
    page.getByRole('button', { name: "Fulano's Pizza" }),
  ).toBeVisible()
})

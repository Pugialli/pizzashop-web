import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export function sinceDate(date: string) {
  return formatDistanceToNow(date, {
    locale: ptBR,
    addSuffix: true,
  })
}

export function asCurrencyInCents(value: number) {
  return (value / 100).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
}
export function asCurrency(value: number) {
  return value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
}

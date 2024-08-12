import { render, screen } from '@testing-library/react'
import { expect, it } from 'vitest'
import userEvent from '@testing-library/user-event'
import { Input } from '../..'

it('input event', async () => {
  // GIVEN
  let inputValue = ''

  const onInput = (newValue: string) => {
    inputValue = newValue
  }

  render(<Input onInput={onInput} />)

  // WHEN
  const newText = 'new value'
  const input = screen.getByRole('textbox')
  await userEvent.type(input, newText)

  // THEN
  expect(inputValue).toBe(newText)
})

it('input event is trimmed', async () => {
  // GIVEN
  let inputValue = ''

  const onInput = (newValue: string) => {
    inputValue = newValue
  }

  render(<Input onInput={onInput} />)

  // WHEN
  const untrimmedText = '  new  value  '
  const input = screen.getByRole('textbox')
  await userEvent.type(input, untrimmedText)

  // THEN
  expect(inputValue).toBe(untrimmedText.trim())
})

it('input event returns the event object', async () => {
  // GIVEN
  let event: React.ChangeEvent<HTMLInputElement> | undefined

  const onInput = (_: string, e: React.ChangeEvent<HTMLInputElement>) => {
    event = e
  }

  render(<Input onInput={onInput} />)

  // WHEN
  const newText = 'new value'
  const input = screen.getByRole('textbox')
  await userEvent.type(input, newText)

  // THEN
  expect(event?.target.value).toBe(newText)
})

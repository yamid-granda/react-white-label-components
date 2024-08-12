import { render, screen } from '@testing-library/react'
import { expect, it } from 'vitest'
import userEvent from '@testing-library/user-event'
import { Input } from '../..'

it('change event', async () => {
  // GIVEN
  let inputValue = ''

  const onChange = (newValue: string) => {
    inputValue = newValue
  }

  render(<Input onChange={onChange} />)

  // WHEN
  const newText = 'new value'
  const input = screen.getByRole('textbox')
  await userEvent.type(input, newText)

  // THEN
  expect(inputValue).toBe(newText)
})

it('change event is trimmed', async () => {
  // GIVEN
  let inputValue = ''

  const onChange = (newValue: string) => {
    inputValue = newValue
  }

  render(<Input onChange={onChange} />)

  // WHEN
  const untrimmedText = '  new  value  '
  const input = screen.getByRole('textbox')
  await userEvent.type(input, untrimmedText)

  // THEN
  expect(inputValue).toBe(untrimmedText.trim())
})

it('change event returns the event object', async () => {
  // GIVEN
  let event: React.ChangeEvent<HTMLInputElement> | undefined

  const onChange = (_: string, e: React.ChangeEvent<HTMLInputElement>) => {
    event = e
  }

  render(<Input onChange={onChange} />)

  // WHEN
  const newText = 'new value'
  const input = screen.getByRole('textbox')
  await userEvent.type(input, newText)

  // THEN
  expect(event?.target.value).toBe(newText)
})

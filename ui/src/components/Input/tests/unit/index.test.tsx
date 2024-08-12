import { expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Input } from '../../'

it('default value', () => {
  // GIVEN
  const initialValue = 'initial value'

  // WHEN
  render(<Input defaultValue={initialValue} />)
  const input = screen.getByDisplayValue(initialValue)

  // THEN
  expect(input).toBeTruthy()
})

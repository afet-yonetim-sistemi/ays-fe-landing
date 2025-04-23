import * as React from 'react'
import { Input } from '@/components/ui/input'

type BaseInputProps = React.ComponentPropsWithoutRef<typeof Input>

export interface NumericInputProps
  extends Omit<BaseInputProps, 'type' | 'value' | 'onChange'> {
  maxLength?: number
  value?: number | ''
  onValueChange?: (value?: number) => void
}

export const NumericInput = React.forwardRef<
  HTMLInputElement,
  NumericInputProps
>(function NumericInput(
  { maxLength = 3, value = '', onValueChange, onKeyDown, onBlur, ...rest },
  ref
) {
  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (['e', 'E', '+', '-', '.', ','].includes(e.key)) {
      e.preventDefault()
      return
    }
    onKeyDown?.(e)
  }

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const digits = e.target.value.replace(/\D/g, '')
    if (digits.length <= maxLength) {
      const num = digits === '' ? undefined : parseInt(digits, 10)
      onValueChange?.(num)
    }
  }

  return (
    <Input
      {...rest}
      ref={ref}
      type="text"
      inputMode="numeric"
      pattern="[0-9]*"
      value={value === undefined ? '' : value}
      onKeyDown={handleKeyDown}
      onChange={handleChange}
      onBlur={onBlur}
    />
  )
})

NumericInput.displayName = 'NumericInput'

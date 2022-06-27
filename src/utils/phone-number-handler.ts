import { ChangeEvent } from 'react'
import { digitsOnly, phoneMask } from 'regulars'
import { FormikErrors } from 'formik'
import { FormValues } from 'models'

export const phoneNumberHandler =
  (
    setField: (
      field: string,
      value: any,
      shouldValidate?: boolean | undefined,
    ) => Promise<FormikErrors<FormValues>> | Promise<void>,
  ) =>
  (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement
    const { value } = target

    const strippedValue = value.replace(digitsOnly, '').replace('7', '')
    const chars = strippedValue.split('')
    let count = 0

    let formatted = ''
    for (let i = 0; i < phoneMask.length; i++) {
      const char = phoneMask[i]
      if (chars[count]) {
        if (/_/.test(char)) {
          formatted += chars[count]
          count++
          continue
        }

        formatted += char
        continue
      }

      if (phoneMask.split('')[i]) formatted += phoneMask.split('')[i]
    }

    setField('phoneNumber', formatted)
  }

export default phoneNumberHandler

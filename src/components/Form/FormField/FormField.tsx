import React, { FC } from 'react'
import { FormikErrors } from 'formik'
import { DatePicker, Input } from 'antd'
import { birthdayHandler, phoneNumberHandler } from 'utils'
import { FormValues } from 'models'
import moment from 'moment'

interface IFormField {
  text: string
  name: string
  value: string
  type: string
  error?: string

  setFieldValue(
    field: string,
    value: any,
    shouldValidate?: boolean | undefined,
  ): Promise<FormikErrors<FormValues>> | Promise<void>

  handleChange(e: React.ChangeEvent<any>): void
}

const FormField: FC<IFormField> = ({
  text,
  error,
  name,
  value,
  type,
  setFieldValue,
  handleChange,
}) => (
  <div key={name} className='form__item'>
    <label htmlFor={name}>{text}</label>
    {name === 'birthday' ? (
      <DatePicker
        onChange={birthdayHandler(setFieldValue)}
        name={name}
        id={name}
        picker='date'
        placeholder={text}
        status={error ? 'error' : undefined}
        value={value.length ? moment(value, 'DD.MM.YYYY') : null}
        format='DD.MM.YYYY'
        allowClear
      />
    ) : name !== 'message' ? (
      <Input
        name={name}
        id={name}
        type={type}
        onChange={name === 'phoneNumber' ? phoneNumberHandler(setFieldValue) : handleChange}
        value={value}
        placeholder={text}
        status={error ? 'error' : undefined}
      />
    ) : (
      <Input.TextArea
        name={name}
        id={name}
        onChange={handleChange}
        value={value}
        placeholder={text}
        status={error ? 'error' : undefined}
        autoSize={{ minRows: 5, maxRows: 10 }}
        allowClear
      />
    )}
    {error ? <span className='error'>{error}</span> : null}
  </div>
)

export default FormField

import React, { FC, useState } from 'react'
import { useFormik } from 'formik'
import { Button } from 'antd'
import { formMapper } from 'mappers'
import { FormValues } from 'models'
import { validateForm, handleFormSubmit } from 'utils'
import { phoneMask } from 'regulars'
import { FormField } from './FormField'
import './form.scss'

const Form: FC = () => {
  const [isLoading, setIsLoading] = useState(false)

  const formik = useFormik<FormValues>({
    initialValues: {
      userName: '',
      phoneNumber: phoneMask,
      email: '',
      birthday: '',
      message: '',
    },
    onSubmit: handleFormSubmit(setIsLoading),
    validate: validateForm,
  })

  return (
    <div className='form'>
      <h2 className='form__title'>Form with user data</h2>
      <form onSubmit={formik.handleSubmit}>
        {formMapper.map(({ name, type, text }) => (
          <FormField
            key={name}
            name={name}
            value={formik.values[name]}
            text={text}
            setFieldValue={formik.setFieldValue}
            handleChange={formik.handleChange}
            error={formik.errors[name]}
            type={type}
          />
        ))}
        <Button htmlType='submit' type='primary' size='large' loading={isLoading}>
          Submit form
        </Button>
      </form>
    </div>
  )
}

export default Form

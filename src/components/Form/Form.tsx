import React from 'react';
import { FormikErrors, useFormik } from 'formik';
import { Button, Input } from 'antd';
import { formMapper } from 'mappers';
import { FormValues } from 'models';
import './form.scss';

const Form = () => {
  const formik = useFormik<FormValues>({
    initialValues: {
      userName: '',
      phoneNumber: '',
      email: '',
      birthday: '',
      message: '',
    },
    onSubmit: (values: FormValues): void | Promise<never> => {
      return undefined;
    },
    validate: (values: FormValues): void | object | Promise<FormikErrors<FormValues>> => {
      return undefined;
    },
  });

  return (
    <div className='form' onSubmit={formik.handleSubmit}>
      <h2 className='form__title'>Form with user data</h2>
      <form action=''>
        {formMapper.map(({ name, type, text, isTextarea }) => {
          const error = formik.errors[name];
          const value = formik.values[name];

          return (
            <div key={name} className='form__item'>
              <label htmlFor={name}>{text}</label>
              {!isTextarea ? (
                <Input
                  name={name}
                  id={name}
                  type={type}
                  onChange={formik.handleChange}
                  value={value}
                  placeholder={text}
                  status={error ? 'error' : undefined}
                  allowClear
                />
              ) : (
                <Input.TextArea
                  name={name}
                  id={name}
                  onChange={formik.handleChange}
                  value={value}
                  placeholder={text}
                  status={error ? 'error' : undefined}
                  autoSize={{ minRows: 5, maxRows: 10 }}
                  allowClear
                />
              )}
            </div>
          );
        })}
        <Button htmlType='submit' type='primary' size='large'>
          Submit form
        </Button>
      </form>
    </div>
  );
};

export default Form;

import { FormikErrors } from 'formik'
import { FormValues } from 'models'

export const birthdayHandler =
  (
    setField: (
      field: string,
      value: any,
      shouldValidate?: boolean | undefined,
    ) => Promise<FormikErrors<FormValues>> | Promise<void>,
  ) =>
  (_: any, dateString: string) => {
    setField('birthday', dateString, true)
  }

export default birthdayHandler

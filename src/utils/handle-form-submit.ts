import { Dispatch, SetStateAction } from 'react'
import { toast } from 'react-toastify'
import { FormValues } from 'models'
import { FormikHelpers } from 'formik/dist'

export const handleFormSubmit =
  (setIsLoading: Dispatch<SetStateAction<boolean>>) =>
  (values: FormValues, { resetForm }: FormikHelpers<FormValues>): void | Promise<never> => {
    setIsLoading(true)
    const fetchPromise = fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(values),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(() => resetForm())
      .finally(() => setIsLoading(false))

    toast.promise(fetchPromise, {
      pending: 'Data sending...',
      error: 'Error with sending data.',
      success: 'Data sent successfully!',
    })
  }

export default handleFormSubmit

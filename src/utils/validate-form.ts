import { FormValues } from 'models'
import { digitsOnly, emailValidation } from 'regulars'

const validateUserName = (userName: string) => {
  if (!userName) return 'This field is required'

  const [name, surname] = userName.trim().split(' ')
  if (!name || !surname) return 'Name and surname is required'
  if (name.length < 3) return 'Too short name'
  if (surname.length < 3) return 'Too short surname'
  if (name.length > 30) return 'Too long name'
  if (surname.length > 30) return 'Too long surname'
}

const validateMessage = (message: string) => {
  if (!message) return 'This field is required'
  if (message.length > 300) return 'Maximal length of message is 300 characters'
  if (message.length < 10) return 'Minimal length of message is 10 characters'
}

const validateEmail = (email: string) => {
  if (!email) return 'This field is required'
  if (!email.match(emailValidation)) return 'Invalid email'
}

const validatePhone = (phoneNumber: string) => {
  if (!phoneNumber.replaceAll(digitsOnly, '').replace('7', '').length)
    return 'This field is required'
}

const validateBirthday = (birthday: string) => {
  if (!birthday) return 'This field is required'
}

const validateForm = (values: FormValues) => {
  const { email, phoneNumber, userName, message, birthday } = values
  const errors: Partial<FormValues> = {}

  const userNameError = validateUserName(userName)
  const messageError = validateMessage(message)
  const emailError = validateEmail(email)
  const phoneNumberError = validatePhone(phoneNumber)
  const birthdayError = validateBirthday(birthday)

  if (userNameError) errors.userName = userNameError
  if (messageError) errors.message = messageError
  if (emailError) errors.email = emailError
  if (phoneNumberError) errors.phoneNumber = phoneNumberError
  if (birthdayError) errors.birthday = birthdayError

  return errors
}

export default validateForm

import { FormValues } from 'models'

export const formMapper: {
  name: keyof FormValues
  type: string
  text: string
}[] = [
  {
    name: 'userName',
    type: 'text',
    text: 'Name and surname',
  },
  {
    name: 'email',
    type: 'email',
    text: 'Email',
  },
  {
    name: 'phoneNumber',
    type: 'tel',
    text: 'Phone number',
  },
  {
    name: 'birthday',
    type: 'text',
    text: 'Date of birthday',
  },
  {
    name: 'message',
    type: 'text',
    text: 'Message',
  },
]

export default formMapper

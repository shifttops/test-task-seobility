import { FormValues } from 'models';

export const formMapper: {
  name: keyof FormValues;
  type: string;
  text: string;
  isTextarea?: boolean;
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
    type: 'text',
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
    isTextarea: true,
  },
];

export default formMapper;

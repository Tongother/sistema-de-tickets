import type { NextApiRequest, NextApiResponse } from 'next';
import { EmailTemplate } from '@/components/email-template';
import { Resend } from 'resend';

const resend = new Resend("re_eSRGuPJp_Jy6B3JSJsUQ8J87ZbZQgQdzd");

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { data, error } = await resend.emails.send({
    from: 'gunthernettel@gmail.com',
    to: ['gunther.nettel36@unach.mx'],
    subject: 'Hello world',
    react: EmailTemplate({ firstName: 'Julian' }),
    text: 'Te estamos vigilando Julian',
  });

  if (error) {
    console.log(error);
    return res.status(400).json(error);
  }

  res.status(200).json(data);
};



import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const handler = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Wrong method' });
  }

  try {
    const { name, message, email, subject } = req.body;

    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: 'diegdelgadog1@gmail.com',
      replyTo: email,
      subject: subject || `Mensaje de contacto de ${name || 'usuario'}`,
      html: `<strong>Nombre:</strong> ${name || '-'}<br />
      <strong>Email:</strong> ${email || '-'}<br />
      <strong>Mensaje:</strong><br />${message || '-'}`,
    });

    return res.status(200).json({ data });
  } catch (error) {
    console.error(error);
    return res.status(502).json({ error });
  }
};

export default handler;
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const handler = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Wrong method' });
  }

  if (!process.env.RESEND_API_KEY) {
    return res.status(500).json({
      message: 'Falta RESEND_API_KEY en variables de entorno',
    });
  }

  try {
    const { name, message, email, subject } = req.body;

    const result = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: 'diegodelgadog1@gmail.com',
      replyTo: email,
      subject: subject || `Mensaje de contacto de ${name || 'usuario'}`,
      html: `<strong>Nombre:</strong> ${name || '-'}<br />
      <strong>Email:</strong> ${email || '-'}<br />
      <strong>Mensaje:</strong><br />${message || '-'}`,
    });

    if (result?.error) {
      return res.status(502).json({
        message: 'Resend devolvio un error',
        error: result.error,
      });
    }

    return res.status(200).json({ data: result?.data || result });
  } catch (error) {
    console.error(error);
    return res.status(502).json({
      message: 'No se pudo enviar el correo',
      error: {
        message: error?.message || 'Error desconocido',
      },
    });
  }
};

export default handler;

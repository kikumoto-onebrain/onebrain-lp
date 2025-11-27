import emailjs from 'emailjs-com';

export async function sendContactEmail(data: {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
}) {
  return emailjs.send(
    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_duv4v6j',
    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_sjcv9yv',
    data,
    process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '-Y8iqxnk_jTIkalsP'
  );
}

import { NextResponse } from 'next/server';

interface ContactPayload {
  name?: string;
  email?: string;
  projectType?: string;
  message?: string;
}

const RESEND_API_ENDPOINT = 'https://api.resend.com/emails';
const RESEND_API_KEY = process.env.RESEND_API_KEY;

function buildEmailBody({ name, email, projectType, message }: Required<ContactPayload>) {
  const projectLine = projectType ? `<p><strong>Project Type:</strong> ${projectType}</p>` : '';

  return {
    text: `Name: ${name}
Email: ${email}
Project Type: ${projectType || 'Not specified'}

${message}`,
    html: `<div>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${projectLine}
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br/>')}</p>
    </div>`,
  };
}

export async function POST(request: Request) {
  try {
    const data = (await request.json()) as ContactPayload;
    const name = data.name?.trim();
    const email = data.email?.trim();
    const message = data.message?.trim();
    const projectType = data.projectType?.trim() ?? '';

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: 'Name, email, and message are required.' },
        { status: 400 },
      );
    }

    if (!RESEND_API_KEY) {
      console.error('Missing RESEND_API_KEY environment variable.');
      return NextResponse.json(
        { ok: false, error: 'Email service is not configured.' },
        { status: 500 },
      );
    }

    const fromEmail = process.env.CONTACT_FROM_EMAIL ?? 'EdenArch <no-reply@edenarch.co>';
    const toEmail = process.env.CONTACT_TO_EMAIL ?? 'edenetilahun@gmail.com';

    const { text, html } = buildEmailBody({
      name,
      email,
      projectType,
      message,
    });

    const sendResponse = await fetch(RESEND_API_ENDPOINT, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: email,
        subject: `New inquiry from ${name}`,
        text,
        html,
      }),
    });

    if (!sendResponse.ok) {
      const errorBody = await sendResponse.text();
      console.error('Resend API error:', errorBody);
      throw new Error('Failed to send email via Resend.');
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Contact form submission failed:', error);
    return NextResponse.json(
      {
        ok: false,
        error: 'Unable to send your message right now. Please try again later.',
      },
      { status: 500 },
    );
  }
}

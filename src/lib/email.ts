import { Resend } from 'resend';

let _resend: Resend | null = null;

function getResend(): Resend {
  if (!_resend) {
    _resend = new Resend(process.env.RESEND_API_KEY);
  }
  return _resend;
}

const FROM_EMAIL =
  process.env.FROM_EMAIL || 'noreply@baringconstruction.ph';
const TO_EMAIL =
  process.env.CONTACT_EMAIL || 'info@baringconstruction.ph';

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

interface ContactEmailData {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
}

interface FileLink {
  name: string;
  url: string;
}

interface QuoteEmailData {
  name: string;
  email: string;
  phone: string;
  company?: string;
  projectType: string;
  location: string;
  budget: string;
  timeline: string;
  description: string;
  fileNames?: string[];
  fileLinks?: FileLink[];
}

export async function sendContactEmail(data: ContactEmailData) {
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #0047AB;">New Contact Form Submission</h2>
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 8px 0; font-weight: bold; color: #333;">Name:</td>
          <td style="padding: 8px 0; color: #555;">${escapeHtml(data.name)}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: bold; color: #333;">Email:</td>
          <td style="padding: 8px 0; color: #555;">${escapeHtml(data.email)}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: bold; color: #333;">Phone:</td>
          <td style="padding: 8px 0; color: #555;">${escapeHtml(data.phone)}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: bold; color: #333;">Project Type:</td>
          <td style="padding: 8px 0; color: #555;">${escapeHtml(data.projectType)}</td>
        </tr>
      </table>
      <h3 style="color: #0047AB; margin-top: 20px;">Message</h3>
      <p style="color: #555; line-height: 1.6;">${escapeHtml(data.message)}</p>
    </div>
  `;

  return getResend().emails.send({
    from: FROM_EMAIL,
    to: TO_EMAIL,
    subject: `Contact Form: ${data.name} - ${data.projectType}`,
    html,
    replyTo: data.email,
  });
}

export async function sendQuoteEmail(data: QuoteEmailData) {
  let filesHtml = '';
  if (data.fileLinks?.length) {
    filesHtml = `
      <h3 style="color: #0047AB; margin-top: 20px;">Attachments</h3>
      <ul style="color: #555;">
        ${data.fileLinks.map((f) => `<li><a href="${escapeHtml(f.url)}" style="color: #0047AB;">${escapeHtml(f.name)}</a></li>`).join('')}
      </ul>
    `;
  } else if (data.fileNames?.length) {
    filesHtml = `
      <h3 style="color: #0047AB; margin-top: 20px;">Attachments</h3>
      <ul style="color: #555;">
        ${data.fileNames.map((f) => `<li>${escapeHtml(f)}</li>`).join('')}
      </ul>
    `;
  }

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #0047AB;">New Quote Request</h2>
      <h3 style="color: #333;">Contact Information</h3>
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 8px 0; font-weight: bold; color: #333;">Name:</td>
          <td style="padding: 8px 0; color: #555;">${escapeHtml(data.name)}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: bold; color: #333;">Email:</td>
          <td style="padding: 8px 0; color: #555;">${escapeHtml(data.email)}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: bold; color: #333;">Phone:</td>
          <td style="padding: 8px 0; color: #555;">${escapeHtml(data.phone)}</td>
        </tr>
        ${data.company ? `
        <tr>
          <td style="padding: 8px 0; font-weight: bold; color: #333;">Company:</td>
          <td style="padding: 8px 0; color: #555;">${escapeHtml(data.company)}</td>
        </tr>
        ` : ''}
      </table>
      <h3 style="color: #333; margin-top: 20px;">Project Details</h3>
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 8px 0; font-weight: bold; color: #333;">Type:</td>
          <td style="padding: 8px 0; color: #555;">${escapeHtml(data.projectType)}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: bold; color: #333;">Location:</td>
          <td style="padding: 8px 0; color: #555;">${escapeHtml(data.location)}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: bold; color: #333;">Budget:</td>
          <td style="padding: 8px 0; color: #555;">${escapeHtml(data.budget)}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: bold; color: #333;">Timeline:</td>
          <td style="padding: 8px 0; color: #555;">${escapeHtml(data.timeline)}</td>
        </tr>
      </table>
      <h3 style="color: #0047AB; margin-top: 20px;">Description</h3>
      <p style="color: #555; line-height: 1.6;">${escapeHtml(data.description)}</p>
      ${filesHtml}
    </div>
  `;

  return getResend().emails.send({
    from: FROM_EMAIL,
    to: TO_EMAIL,
    subject: `Quote Request: ${data.name} - ${data.projectType}`,
    html,
    replyTo: data.email,
  });
}

export async function sendAutoReply(
  to: string,
  name: string
) {
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #0047AB;">Thank You, ${escapeHtml(name)}!</h2>
      <p style="color: #555; line-height: 1.6;">
        We have received your inquiry and our team will review it promptly.
        You can expect to hear back from us within 1-2 business days.
      </p>
      <p style="color: #555; line-height: 1.6;">
        If you need immediate assistance, feel free to contact us directly:
      </p>
      <ul style="color: #555;">
        <li>Phone: +63 XXX XXX XXXX</li>
        <li>Email: info@baringconstruction.ph</li>
      </ul>
      <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
      <p style="color: #999; font-size: 12px;">
        Baring Construction Services<br />
        Professional Construction Solutions
      </p>
    </div>
  `;

  return getResend().emails.send({
    from: FROM_EMAIL,
    to,
    subject: 'Thank you for contacting Baring Construction Services',
    html,
  });
}

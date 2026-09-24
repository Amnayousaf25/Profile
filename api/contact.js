import nodemailer from 'nodemailer';
import { Resend } from 'resend';

export default async function handler(req, res) {
  // CORS configuration
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }

  const { name, email, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: 'Name, email, and message are required fields.',
    });
  }

  const recipientEmail = process.env.RECIPIENT_EMAIL || 'amnayousuf538@gmail.com';
  const emailSubject = `Portfolio Inquiry from ${name}`;
  const htmlContent = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0F172A; color: #F8FAFC; border-radius: 12px; overflow: hidden; border: 1px solid rgba(255,255,255,0.1);">
      <div style="background: linear-gradient(135deg, #38BDF8 0%, #818CF8 100%); padding: 24px; color: #0F172A;">
        <h2 style="margin: 0; font-size: 22px; font-weight: 800;">New Portfolio Message</h2>
        <p style="margin: 4px 0 0 0; font-size: 14px; font-weight: 600;">You received a new inquiry from your portfolio website.</p>
      </div>
      <div style="padding: 24px;">
        <div style="margin-bottom: 16px; background: rgba(255,255,255,0.04); padding: 12px 16px; border-radius: 8px;">
          <div style="color: #38BDF8; font-size: 12px; text-transform: uppercase; font-weight: 700; letter-spacing: 0.05em;">Sender Name</div>
          <div style="font-size: 16px; margin-top: 4px; color: #F8FAFC; font-weight: 600;">${name}</div>
        </div>
        <div style="margin-bottom: 16px; background: rgba(255,255,255,0.04); padding: 12px 16px; border-radius: 8px;">
          <div style="color: #38BDF8; font-size: 12px; text-transform: uppercase; font-weight: 700; letter-spacing: 0.05em;">Sender Email</div>
          <div style="font-size: 16px; margin-top: 4px;"><a href="mailto:${email}" style="color: #38BDF8; text-decoration: none;">${email}</a></div>
        </div>
        <div style="background: rgba(255,255,255,0.04); padding: 16px; border-radius: 8px;">
          <div style="color: #38BDF8; font-size: 12px; text-transform: uppercase; font-weight: 700; letter-spacing: 0.05em;">Message Details</div>
          <div style="font-size: 15px; margin-top: 8px; line-height: 1.6; white-space: pre-wrap; color: #E2E8F0;">${message}</div>
        </div>
        <div style="margin-top: 24px; text-align: center;">
          <a href="mailto:${email}?subject=Re:%20Portfolio%20Inquiry" style="display: inline-block; padding: 12px 24px; background: #38BDF8; color: #0F172A; text-decoration: none; font-weight: 700; border-radius: 8px;">Reply to ${name} (${email})</a>
        </div>
      </div>
    </div>
  `;

  // 1. Resend API Handler
  const resendKey = process.env.RESEND_API_KEY;
  if (resendKey) {
    try {
      const resend = new Resend(resendKey);
      const data = await resend.emails.send({
        from: process.env.RESEND_FROM || 'Portfolio Contact <onboarding@resend.dev>',
        to: recipientEmail,
        reply_to: email,
        subject: emailSubject,
        html: htmlContent,
      });

      if (data && !data.error) {
        return res.status(200).json({ success: true, provider: 'resend', id: data.data?.id });
      }
      console.warn('Resend send warning:', data.error);
    } catch (err) {
      console.error('Resend error:', err);
    }
  }

  // 2. Nodemailer (Gmail SMTP) Handler
  const gmailUser = process.env.GMAIL_USER;
  const gmailPass = process.env.GMAIL_APP_PASSWORD;
  if (gmailUser && gmailPass) {
    try {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: gmailUser,
          pass: gmailPass,
        },
      });

      const info = await transporter.sendMail({
        from: `"${name} via Portfolio" <${gmailUser}>`,
        to: recipientEmail,
        replyTo: email,
        subject: emailSubject,
        html: htmlContent,
      });

      return res.status(200).json({ success: true, provider: 'nodemailer', messageId: info.messageId });
    } catch (err) {
      console.error('Nodemailer error:', err);
    }
  }

  // 3. Fallback: Web3Forms API server-side
  const web3Key = process.env.WEB3FORMS_ACCESS_KEY || process.env.VITE_WEB3FORMS_ACCESS_KEY;
  if (web3Key) {
    try {
      const resp = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: web3Key,
          name,
          email,
          message,
          subject: emailSubject,
        }),
      });
      const data = await resp.json();
      if (data.success) {
        return res.status(200).json({ success: true, provider: 'web3forms' });
      }
    } catch (err) {
      console.error('Web3Forms server-side error:', err);
    }
  }

  // If no backend credentials have been configured yet
  return res.status(503).json({
    success: false,
    message: 'Backend email service requires configuration. Please set RESEND_API_KEY or GMAIL_APP_PASSWORD.',
  });
}

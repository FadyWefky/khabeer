// pages/api/cron/send-report.js
import fs from 'fs';
import path from 'path';
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // Verify cron secret
  if (req.headers.authorization !== `Bearer ${process.env.CRON_SECRET}`) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    const csvPath = path.join(process.cwd(), 'data', 'submissions.csv');
    const csvContent = fs.readFileSync(csvPath, 'utf-8');

    // Setup nodemailer
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });

    // Send email
    await transporter.sendMail({
      from: process.env.MAIL_FROM,
      to: process.env.MAIL_TO,
      subject: 'Daily Submissions Report',
      text: 'Please find attached today\'s submissions.',
      attachments: [{
        filename: 'submissions.csv',
        content: csvContent
      }]
    });

    res.status(200).json({ message: 'Report sent successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error sending report' });
  }
}
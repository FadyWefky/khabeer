// pages/api/sendReport.js
import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';
import { format } from 'date-fns';

export default async function handler(req, res) {
  if (req.method !== 'POST' || req.headers['x-cron-secret'] !== process.env.CRON_SECRET) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    const csvPath = path.join(process.cwd(), 'data', 'submissions.csv');
    const csvContent = fs.readFileSync(csvPath, 'utf-8');
    const date = format(new Date(), 'yyyy-MM-dd');

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: `Form Submissions Report - ${date}`,
      text: 'Please find attached the latest form submissions.',
      attachments: [{
        filename: `submissions-${date}.csv`,
        content: csvContent
      }]
    });

    // Create new CSV for next day
    const headers = ['timestamp', 'name', 'email', 'phone', 'market', 'stocks', 'comment'];
    fs.writeFileSync(csvPath, headers.join(',') + '\n');

    res.status(200).json({ message: 'Report sent successfully' });
  } catch (error) {
    console.error('Error sending report:', error);
    res.status(500).json({ message: 'Error sending report' });
  }
}
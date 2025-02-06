// pages/api/submit.js
import fs from 'fs';
import path from 'path';
import { format } from 'date-fns';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const dataDir = path.join(process.cwd(), 'data');
    const csvPath = path.join(dataDir, 'submissions.csv');
    
    // Create directory if it doesn't exist
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    // Create CSV with headers if it doesn't exist
    if (!fs.existsSync(csvPath)) {
      const headers = ['timestamp', 'name', 'email', 'phone', 'market', 'stocks', 'comment'].join(',');
      fs.writeFileSync(csvPath, headers + '\n');
    }

    const { name, email, phone, market, stocks, comment } = req.body;
    
    const row = [
      format(new Date(), 'yyyy-MM-dd HH:mm:ss'),
      name,
      email,
      phone,
      market,
      stocks,
      comment
    ].map(field => `"${field?.replace(/"/g, '""') || ''}"`).join(',');

    fs.appendFileSync(csvPath, row + '\n');
    
    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Submission error:', error);
    res.status(500).json({ success: false, error: error.message });
  }
}
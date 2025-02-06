// scripts/createInitialCSV.js
const fs = require('fs');
const path = require('path');

const dataDir = path.join(process.cwd(), 'data');
const csvPath = path.join(dataDir, 'submissions.csv');

// Create data directory if it doesn't exist
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

// Define CSV headers
const headers = [
  'timestamp',
  'name',
  'email',
  'phone',
  'market',
  'stocks',
  'comment'
].join(',');

// Create or overwrite CSV file with headers
fs.writeFileSync(csvPath, headers + '\n', 'utf-8');

console.log('CSV file created successfully at:', csvPath);
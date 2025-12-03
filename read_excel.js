const XLSX = require('xlsx');
const fs = require('fs');

const filePath = 'C:\\Users\\ADMIN\\Downloads\\Active Accounts 12-3-2025 6-52-25 PM.xlsx';

try {
    const workbook = XLSX.readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];

    // Convert to JSON with raw values to preserve dates if possible, or formatted strings
    const data = XLSX.utils.sheet_to_json(sheet, { raw: false, defval: '---' });

    fs.writeFileSync('d:\\antigravity\\excel_data.json', JSON.stringify(data, null, 2), 'utf8');
    console.log('Data written to excel_data.json');
} catch (e) {
    console.error('Error reading file:', e);
}

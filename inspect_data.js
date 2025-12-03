const fs = require('fs');

try {
    const data = fs.readFileSync('d:\\antigravity\\excel_data.json', 'utf8');
    const json = JSON.parse(data);

    if (json.length > 0) {
        console.log('Total rows:', json.length);
        console.log('Keys:');
        Object.keys(json[0]).forEach(key => console.log(key));
    } else {
        console.log('No data found');
    }
} catch (e) {
    console.log('Error:', e.message);
}

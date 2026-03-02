const axios = require('axios');

const main = async () => {
    try {
        const loginRes = await axios.post('http://localhost:3001/api/client/login', {
            email: 'admin@propfirm.com',
            password: 'admin123'
        });
        const token = loginRes.data.token;

        const usersRes = await axios.get('http://localhost:3001/api/admin/users', {
            headers: { Authorization: `Bearer ${token}` }
        });

        console.log(`Total Users: ${usersRes.data.length}`);
        console.table(usersRes.data.map(u => ({ id: u.id, name: u.name, email: u.email })));

    } catch (error) {
        console.error('Error:', error.response ? error.response.data : error.message);
    }
};

main();

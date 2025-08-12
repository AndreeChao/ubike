const fetch = require('node-fetch');

export default async function handler(req, res) {
    try {
        const response = await fetch('https://data.ntpc.gov.tw/api/datasets/010e5b15-3823-4b20-b401-b1cf000550c5/json');
        if (!response.ok) {
            throw new Error('Failed to fetch data from API.');
        }
        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


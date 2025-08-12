const fetch = require('node-fetch');

export default async function handler(req, res) {
    try {
        const response = await fetch('https://apis.youbike.com.tw/json/station-yb2.json');
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }
        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

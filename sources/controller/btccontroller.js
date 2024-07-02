const axios = require('axios');
const COINGECKO_API_URL = 'https://api.coingecko.com/api/v3';

const getBitcoinInfo = async (req, res) => {
    try {
        const response = await axios.get(`${COINGECKO_API_URL}/coins/bitcoin`);

        const bitcoinData = {
            name: response.data.name,
            symbol: response.data.symbol,
            current_price: response.data.market_data.current_price.usd,
        };

        res.json(bitcoinData);
    } catch (error) {
        console.error(`Erro ao receber informações do Bitcoin: ${error.message}`);
        res.status(500).json({ error: 'Erro ao receber informações do Bitcoin' });
    }
};

module.exports = {
    getBitcoinInfo
};

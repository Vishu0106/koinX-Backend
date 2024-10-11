import { Crypto } from '../models/crypto.model.js';
import { fetchCryptoData } from './fetchCrypto.service.js';

async function updateCryptoData() {
    const data = await fetchCryptoData();
    if (!data) {
        console.error('No data fetched');
        if (process.env.NODE_ENV !== 'production') {
            throw new Error('No data fetched');
        }
        return;
    }
    Object.keys(data).forEach(async (coin) => {
        const { usd: price, usd_market_cap: marketCap, usd_24h_change: dayChange } = data[coin];
        const crypto = new Crypto({ coin, price, marketCap, dayChange });
        await crypto.save();
    });
}

export default updateCryptoData;

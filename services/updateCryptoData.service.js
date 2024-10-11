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
    data.forEach(async (coinData) => {
        const { id: coin, market_cap: marketCap, market_cap_change_24h: dayChange ,current_price: price } = coinData;
        const crypto = new Crypto({ coin, marketCap, dayChange, price });
        await crypto.save();
    });
}

export default updateCryptoData;

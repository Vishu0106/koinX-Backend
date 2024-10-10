import axios from 'axios';

async function fetchCryptoData() {
  const coins = ['bitcoin', 'matic-network', 'ethereum'];
  const url = 'https://api.coingecko.com/api/v3/simple/price';

  try {
    const response = await axios.get(url, {
      params: {
        vs_currencies: 'usd',
        ids: coins.join(','),
        x_cg_demo_api_key: 'CG-DzEnXw1Yvpn9zEUCieCWdpFF',
        include_market_cap: true,
        include_24hr_change: true,
        precision : 0
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching data from CoinGecko', error);
  }
}

export { fetchCryptoData };

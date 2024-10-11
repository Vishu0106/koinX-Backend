import axios from 'axios';

// Reusable function to fetch cryptocurrency data
async function fetchCryptoData(coins = ['bitcoin', 'matic-network', 'ethereum']) {
  const url = 'https://api.coingecko.com/api/v3/simple/price';
  
  try {
    // Make the API request without an API key
    const response = await axios.get(url, {
      params: {
        vs_currencies: 'usd',
        ids: coins.join(','),
        include_market_cap: true,
        include_24hr_change: true,
        precision: 0,
        x_cg_api_key:process.env.API_KEY
      },
      headers: {
        accept: 'application/json',
        x_cg_api_key:process.env.API_KEY
      },
    });

    // Check for a successful response
    if (response.status === 200) {
      return response.data;  // Return the data on success
    } else {
      console.error('Unexpected response status:', response.status);
    }
  } catch (error) {
    if (error.response) {
      console.error('API Error:', error.response.status, error.response.data);
    } else if (error.request) {
      console.error('No response from CoinGecko API:', error.request);
    } else {
      console.error('Error setting up API request:', error.message);
    }
  }
}

export { fetchCryptoData };

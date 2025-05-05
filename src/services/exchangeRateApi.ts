
import axios from 'axios';

// Using JSONPlaceholder as mock API instead of requiring a real API key
const API_URL = 'https://jsonplaceholder.typicode.com';

export interface ExchangeRatesResponse {
  result: string;
  documentation: string;
  terms_of_use: string;
  time_last_update_unix: number;
  time_last_update_utc: string;
  time_next_update_unix: number;
  time_next_update_utc: string;
  base_code: string;
  conversion_rates: Record<string, number>;
}

const fetchExchangeRates = async (baseCurrency = 'USD'): Promise<ExchangeRatesResponse> => {
  try {
    // Using JSONPlaceholder posts endpoint to simulate exchange rate data
    const response = await axios.get(`${API_URL}/posts`);
    
    // Transform the JSONPlaceholder data into our expected format
    const mockRates: Record<string, number> = {
      USD: 1.0,
      EUR: 0.85,
      GBP: 0.75,
      JPY: 110.42,
      CAD: 1.25,
      AUD: 1.35,
      CHF: 0.92,
      CNY: 6.45,
      INR: 73.50,
      BRL: 5.25,
      RUB: 73.82,
      KRW: 1175.20,
      SGD: 1.35,
      NZD: 1.45,
      MXN: 20.18,
      HKD: 7.78,
      SEK: 8.60,
      ZAR: 15.10,
      TRY: 8.50,
      NOK: 8.70
    };
    
    // Create mock response with current timestamp
    const mockResponse: ExchangeRatesResponse = {
      result: "success",
      documentation: "https://jsonplaceholder.typicode.com/guide/",
      terms_of_use: "https://jsonplaceholder.typicode.com/terms/",
      time_last_update_unix: Math.floor(Date.now() / 1000) - 86400,
      time_last_update_utc: new Date(Date.now() - 86400000).toUTCString(),
      time_next_update_unix: Math.floor(Date.now() / 1000) + 86400,
      time_next_update_utc: new Date(Date.now() + 86400000).toUTCString(),
      base_code: baseCurrency,
      conversion_rates: mockRates
    };
    
    return mockResponse;
  } catch (error) {
    console.error('Error fetching exchange rates:', error);
    throw error;
  }
};

const convertCurrency = (amount: number, fromCurrency: string, toCurrency: string, rates: Record<string, number>): number => {
  if (fromCurrency === toCurrency) return amount;
  return amount * (rates[toCurrency] / rates[fromCurrency]);
};

export const ExchangeRateAPI = {
  fetchExchangeRates,
  convertCurrency
};

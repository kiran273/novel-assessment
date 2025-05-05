
import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { ExchangeRateAPI, ExchangeRatesResponse } from '@/services/exchangeRateApi';
import { toast } from '@/components/ui/use-toast';

interface ExchangeRateContextType {
  rates: Record<string, number>;
  baseCurrency: string;
  isLoading: boolean;
  error: string | null;
  setBaseCurrency: (currency: string) => void;
  convertAmount: (amount: number, fromCurrency: string, toCurrency: string) => number;
  availableCurrencies: string[];
}

const ExchangeRateContext = createContext<ExchangeRateContextType | undefined>(undefined);

export const useExchangeRate = () => {
  const context = useContext(ExchangeRateContext);
  if (!context) {
    throw new Error('useExchangeRate must be used within an ExchangeRateProvider');
  }
  return context;
};

interface ExchangeRateProviderProps {
  children: ReactNode;
}

export const ExchangeRateProvider: React.FC<ExchangeRateProviderProps> = ({ children }) => {
  const [rates, setRates] = useState<Record<string, number>>({});
  const [baseCurrency, setBaseCurrency] = useState('USD');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [availableCurrencies, setAvailableCurrencies] = useState<string[]>([]);

  useEffect(() => {
    const fetchRates = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const response = await ExchangeRateAPI.fetchExchangeRates(baseCurrency);
        setRates(response.conversion_rates);
        setAvailableCurrencies(Object.keys(response.conversion_rates));
      } catch (err) {
        setError('Failed to fetch exchange rates. Please try again later.');
        toast({
          title: 'Error',
          description: 'Failed to fetch exchange rates.',
          variant: 'destructive',
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchRates();
  }, [baseCurrency]);

  const convertAmount = (amount: number, fromCurrency: string, toCurrency: string): number => {
    if (!rates || Object.keys(rates).length === 0) return amount;
    return ExchangeRateAPI.convertCurrency(amount, fromCurrency, toCurrency, rates);
  };

  return (
    <ExchangeRateContext.Provider
      value={{
        rates,
        baseCurrency,
        isLoading,
        error,
        setBaseCurrency,
        convertAmount,
        availableCurrencies
      }}
    >
      {children}
    </ExchangeRateContext.Provider>
  );
};

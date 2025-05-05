
import React from 'react';
import ExchangeRateTable from '@/components/ExchangeRateTable';

const ExchangeRatesPage: React.FC = () => {
  return (
    <div className="container mx-auto py-3 px-4 md:py-6 md:px-6">
      <h1 className="text-2xl md:text-3xl font-bold mb-3 md:mb-6">Live Exchange Rates</h1>
      <p className="mb-3 md:mb-6 text-sm md:text-base">Current exchange rates updated from JSONPlaceholder API.</p>
      <ExchangeRateTable />
    </div>
  );
};

export default ExchangeRatesPage;

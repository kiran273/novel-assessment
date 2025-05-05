
import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { useExchangeRate } from '@/contexts/ExchangeRateContext';

const ExchangeRateTable: React.FC = () => {
  const { rates, baseCurrency, isLoading } = useExchangeRate();
  const [searchTerm, setSearchTerm] = useState('');
  
  // Filter currencies based on search term
  const filteredCurrencies = Object.keys(rates).filter(currency => 
    currency.toLowerCase().includes(searchTerm.toLowerCase()) ||
    getCurrencyName(currency).toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  // Lookup function to get currency names
  function getCurrencyName(code: string): string {
    const currencyNames: Record<string, string> = {
      USD: "US Dollar",
      EUR: "Euro",
      GBP: "British Pound",
      JPY: "Japanese Yen",
      CAD: "Canadian Dollar",
      AUD: "Australian Dollar",
      CHF: "Swiss Franc",
      CNY: "Chinese Yuan",
      INR: "Indian Rupee",
      // Add more as needed
    };
    
    return currencyNames[code] || code;
  }
  
  const formatRate = (rate: number): string => {
    return rate.toFixed(4);
  };

  if (isLoading) {
    return <div className="flex justify-center p-8">Loading exchange rates...</div>;
  }

  return (
    <div className="space-y-4">
      <Input
        placeholder="Search currencies..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="max-w-sm"
      />
      
      <div className="border rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Currency</TableHead>
              <TableHead>Currency Name</TableHead>
              <TableHead>Rate (1 {baseCurrency} =)</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredCurrencies.map(currency => (
              <TableRow key={currency}>
                <TableCell className="font-medium">{currency}</TableCell>
                <TableCell>{getCurrencyName(currency)}</TableCell>
                <TableCell>{formatRate(rates[currency])} {currency}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ExchangeRateTable;

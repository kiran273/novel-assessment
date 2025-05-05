
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { calculateLoanDetails, LoanDetails as LoanDetailsType } from '@/utils/loanCalculator';
import { useExchangeRate } from '@/contexts/ExchangeRateContext';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import LoanDetails from './LoanDetails';
import AmortizationTable from './AmortizationTable';
import { useIsMobile } from '@/hooks/use-mobile';

const LoanCalculator = () => {
  const [principal, setPrincipal] = useState<number>(100000);
  const [interestRate, setInterestRate] = useState<number>(5);
  const [loanTerm, setLoanTerm] = useState<number>(15);
  const [currency, setCurrency] = useState<string>('USD');
  const [loanDetails, setLoanDetails] = useState<LoanDetailsType | null>(null);
  const isMobile = useIsMobile();
  
  const { availableCurrencies, isLoading } = useExchangeRate();
  
  // Calculate loan details when inputs change
  useEffect(() => {
    const details = calculateLoanDetails(principal, interestRate, loanTerm);
    setLoanDetails(details);
  }, [principal, interestRate, loanTerm]);
  
  const handlePrincipalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    if (!isNaN(value) && value >= 0) {
      setPrincipal(value);
    }
  };
  
  const handleInterestRateChange = (value: number[]) => {
    setInterestRate(value[0]);
  };
  
  const handleLoanTermChange = (value: number[]) => {
    setLoanTerm(value[0]);
  };
  
  const handleCurrencyChange = (value: string) => {
    setCurrency(value);
  };
  
  const handleCalculate = () => {
    const details = calculateLoanDetails(principal, interestRate, loanTerm);
    setLoanDetails(details);
  };

  return (
    <div className="container mx-auto py-4 px-0 md:py-8 md:px-4">
      <div className={`grid grid-cols-1 ${isMobile ? '' : 'lg:grid-cols-3'} gap-4 md:gap-6`}>
        <Card className={`${isMobile ? '' : 'lg:col-span-1'}`}>
          <CardHeader className="pb-2">
            <CardTitle className="text-xl md:text-2xl">Loan Calculator</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 md:space-y-6">
              <div className="space-y-2">
                <Label htmlFor="principal">Loan Amount</Label>
                <div className="flex flex-col sm:flex-row gap-2">
                  <Select value={currency} onValueChange={handleCurrencyChange}>
                    <SelectTrigger className="sm:w-24 w-full">
                      <SelectValue placeholder="USD" />
                    </SelectTrigger>
                    <SelectContent>
                      {!isLoading && availableCurrencies.map((curr) => (
                        <SelectItem key={curr} value={curr}>
                          {curr}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Input
                    id="principal"
                    type="number"
                    value={principal}
                    onChange={handlePrincipalChange}
                    className="flex-1"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <Label htmlFor="interestRate">Interest Rate (%)</Label>
                  <span>{interestRate.toFixed(2)}%</span>
                </div>
                <Slider
                  id="interestRate"
                  min={0}
                  max={20}
                  step={0.01}
                  value={[interestRate]}
                  onValueChange={handleInterestRateChange}
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <Label htmlFor="loanTerm">Loan Term (Years)</Label>
                  <span>{loanTerm} Years</span>
                </div>
                <Slider
                  id="loanTerm"
                  min={1}
                  max={30}
                  step={1}
                  value={[loanTerm]}
                  onValueChange={handleLoanTermChange}
                />
              </div>

              <Button onClick={handleCalculate} className="w-full bg-loanBlue hover:bg-blue-700">
                Calculate
              </Button>

              <div className="p-3 md:p-4 bg-muted rounded-md mt-3 md:mt-4 text-sm">
                <h3 className="font-semibold mb-2 text-xs md:text-sm">EMI Formula:</h3>
                <div className="emi-formula text-xs md:text-sm">
                  EMI = [P × r × (1 + r)<sup>n</sup>] / [(1 + r)<sup>n</sup> - 1]
                </div>
                <p className="text-xs mt-2">
                  Where:<br />
                  P = Principal loan amount<br />
                  r = Monthly interest rate (annual rate / 12 / 100)<br />
                  n = Loan duration in months
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {loanDetails && (
          <div className={`space-y-4 md:space-y-6 ${isMobile ? '' : 'lg:col-span-2'}`}>
            <LoanDetails loanDetails={loanDetails} currency={currency} />
            <AmortizationTable amortizationSchedule={loanDetails.amortizationSchedule} currency={currency} />
          </div>
        )}
      </div>
    </div>
  );
};

export default LoanCalculator;


import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LoanDetails as LoanDetailsType } from '@/utils/loanCalculator';
import { useExchangeRate } from '@/contexts/ExchangeRateContext';

interface LoanDetailsProps {
  loanDetails: LoanDetailsType;
  currency: string;
}

const LoanDetails: React.FC<LoanDetailsProps> = ({ loanDetails, currency }) => {
  const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('en-US', { 
      style: 'currency', 
      currency: currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(amount);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Loan Summary</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-muted p-4 rounded-md">
            <div className="text-muted-foreground text-sm">Monthly Payment (EMI)</div>
            <div className="text-2xl font-bold">{formatCurrency(loanDetails.emi)}</div>
          </div>

          <div className="bg-muted p-4 rounded-md">
            <div className="text-muted-foreground text-sm">Total Payment</div>
            <div className="text-2xl font-bold">{formatCurrency(loanDetails.totalPayment)}</div>
          </div>

          <div className="bg-muted p-4 rounded-md">
            <div className="text-muted-foreground text-sm">Total Interest</div>
            <div className="text-2xl font-bold">{formatCurrency(loanDetails.totalInterest)}</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div className="p-4 rounded-md border">
            <div className="text-muted-foreground text-sm">Principal Amount</div>
            <div className="text-lg font-medium">{formatCurrency(loanDetails.principal)}</div>
          </div>

          <div className="p-4 rounded-md border">
            <div className="text-muted-foreground text-sm">Interest Rate</div>
            <div className="text-lg font-medium">{loanDetails.interestRate.toFixed(2)}% p.a.</div>
          </div>

          <div className="p-4 rounded-md border">
            <div className="text-muted-foreground text-sm">Loan Term</div>
            <div className="text-lg font-medium">{loanDetails.loanTerm} years ({loanDetails.loanTerm * 12} months)</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LoanDetails;

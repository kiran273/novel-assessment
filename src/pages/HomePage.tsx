
import React from 'react';
import LoanCalculator from '@/components/LoanCalculator';

const HomePage: React.FC = () => {
  return (
    <div className="container mx-auto py-3 px-4 md:py-6 md:px-6">
      <h1 className="text-2xl md:text-3xl font-bold mb-3 md:mb-6">Loan EMI Calculator</h1>
      <LoanCalculator />
    </div>
  );
};

export default HomePage;

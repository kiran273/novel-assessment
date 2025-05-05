
export interface AmortizationEntry {
  month: number;
  payment: number;
  principal: number;
  interest: number;
  remainingBalance: number;
}

export interface LoanDetails {
  principal: number;
  interestRate: number;
  loanTerm: number;
  emi: number;
  totalPayment: number;
  totalInterest: number;
  amortizationSchedule: AmortizationEntry[];
}

// EMI formula: EMI = P × r × (1 + r)^n / [(1 + r)^n - 1]
export const calculateEMI = (principal: number, interestRate: number, loanTerm: number): number => {
  // Convert interest rate from annual percentage to monthly decimal
  const monthlyRate = interestRate / 100 / 12;
  // Convert loan term from years to months
  const numberOfPayments = loanTerm * 12;

  // Handle edge cases
  if (monthlyRate === 0) return principal / numberOfPayments;
  if (numberOfPayments === 0) return principal;

  // EMI calculation
  const emi = principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments) / (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
  
  return emi;
};

export const calculateLoanDetails = (principal: number, interestRate: number, loanTerm: number): LoanDetails => {
  const emi = calculateEMI(principal, interestRate, loanTerm);
  const numberOfPayments = loanTerm * 12;
  const totalPayment = emi * numberOfPayments;
  const totalInterest = totalPayment - principal;
  
  // Generate amortization schedule
  const amortizationSchedule = generateAmortizationSchedule(principal, interestRate, loanTerm, emi);

  return {
    principal,
    interestRate,
    loanTerm,
    emi,
    totalPayment,
    totalInterest,
    amortizationSchedule
  };
};

export const generateAmortizationSchedule = (
  principal: number,
  interestRate: number,
  loanTerm: number,
  emi: number
): AmortizationEntry[] => {
  const schedule: AmortizationEntry[] = [];
  const monthlyRate = interestRate / 100 / 12;
  const numberOfPayments = loanTerm * 12;
  
  let remainingBalance = principal;
  
  for (let month = 1; month <= numberOfPayments; month++) {
    // Calculate interest for this month
    const interestPayment = remainingBalance * monthlyRate;
    
    // Calculate principal for this month (EMI - interest)
    const principalPayment = emi - interestPayment;
    
    // Update remaining balance
    remainingBalance -= principalPayment;
    
    // Ensure we don't have negative remaining balance due to rounding
    if (remainingBalance < 0) remainingBalance = 0;
    
    // Add entry to schedule
    schedule.push({
      month,
      payment: emi,
      principal: principalPayment,
      interest: interestPayment,
      remainingBalance
    });
  }
  
  return schedule;
};

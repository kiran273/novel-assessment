
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto py-6">
      <h1 className="text-3xl font-bold mb-6">About This App</h1>
      
      <Card className="mb-8">
        <CardContent className="pt-6">
          <p className="mb-4">
            This Loan Calculator App is a modern, single-page web application built using <strong>React JS</strong> and <strong>Material UI</strong>. It allows users to calculate loan EMIs (Equated Monthly Installments), view a detailed amortization schedule, and see real-time currency conversions of their EMI using live exchange rates.
          </p>
        </CardContent>
      </Card>
      
      <h2 className="text-2xl font-bold mb-4">📝 Instructions for Candidates</h2>
      <Card className="mb-8">
        <CardContent className="pt-6">
          <p className="mb-4">Please follow these instructions to complete and submit your project:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Push the entire project to a public <strong>GitHub repository</strong>.</li>
            <li>Make sure to <strong>commit regularly</strong> with clear messages after completing each feature.</li>
            <li>Use the provided EMI formula to perform calculations.</li>
            <li>Use <strong>Context API</strong> for global state management (e.g. theme, currency).</li>
            <li>Create <strong>custom React hooks</strong> for reusable logic (e.g. EMI calculation, fetching exchange rates).</li>
            <li>Ensure the app is fully <strong>responsive</strong> on all screen sizes.</li>
            <li>Implement both <strong>light and dark modes</strong> using Material UI's theming system.</li>
            <li>Add a <strong>404 Not Found page</strong> for unmatched routes.</li>
            <li>Once deployed, add the live deployment link to the GitHub repo.</li>
          </ul>
        </CardContent>
      </Card>

      <h2 className="text-2xl font-bold mb-4">🔨 Features</h2>
      <Card className="mb-8">
        <CardContent className="pt-6">
          <ul className="list-disc pl-6 space-y-2">
            <li>Loan EMI calculation using standard financial formulas</li>
            <li>Dynamic amortization schedule table with monthly breakdown</li>
            <li>Real-time currency conversion of EMI using a live exchange rate API</li>
            <li>Paginated exchange rate table for 160+ currencies</li>
            <li>Dark/Light mode toggle for a customizable experience</li>
            <li>Collapsible header navigation on mobile screens</li>
            <li>Fully responsive UI built with Material UI</li>
          </ul>
        </CardContent>
      </Card>

      <h2 className="text-2xl font-bold mb-4">🧰 Technologies Used</h2>
      <Card className="mb-8">
        <CardContent className="pt-6">
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>React</strong> (Hooks, Routing, Context API)</li>
            <li><strong>Material UI</strong> for styling and responsive components</li>
            <li><strong>Axios</strong> for API calls</li>
            <li><strong>Exchange Rate API</strong> for real-time currency conversion</li>
          </ul>
        </CardContent>
      </Card>

      <h2 className="text-2xl font-bold mb-4">🧮 EMI Formula Used</h2>
      <Card className="mb-8">
        <CardContent className="pt-6">
          <p className="mb-2">The EMI (Equated Monthly Installment) is calculated using the standard formula:</p>
          <div className="emi-formula bg-muted p-4 rounded my-4 text-center">
            EMI = [P × r × (1 + r)<sup>n</sup>] / [(1 + r)<sup>n</sup> - 1]
          </div>
          <p className="mb-2">Where:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>P</strong> = Principal loan amount</li>
            <li><strong>r</strong> = Monthly interest rate (annual rate / 12 / 100)</li>
            <li><strong>n</strong> = Loan duration in months</li>
          </ul>
        </CardContent>
      </Card>

      <h2 className="text-2xl font-bold mb-4">🌐 Currency Conversion API</h2>
      <Card className="mb-8">
        <CardContent className="pt-6">
          <p className="mb-4">This app integrates with the free tier of the ExchangeRate-API to fetch live exchange rates.</p>
          <div className="bg-muted p-4 rounded">
            <h3 className="font-semibold mb-2">API Endpoint Example:</h3>
            <code className="text-sm">https://v6.exchangerate-api.com/v6/YOUR_API_KEY/latest/USD</code>
            <p className="mt-2 text-sm">You must register and obtain a free API key to use this endpoint. Then, replace YOUR_API_KEY in the app code with your actual key.</p>
          </div>
        </CardContent>
      </Card>

      <h2 className="text-2xl font-bold mb-4">🎯 Purpose of This App</h2>
      <Card>
        <CardContent className="pt-6">
          <p className="mb-4">This project is designed to assess a candidate's React development skills, including:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>React fundamentals (state, props, hooks)</li>
            <li>Component structure and code reusability</li>
            <li>Third-party API integration and live data rendering</li>
            <li>Working with tables, lists, and pagination</li>
            <li>Theme customization (dark/light mode toggle)</li>
            <li>Error handling and graceful UI fallbacks</li>
            <li>Responsive design and mobile header navigation</li>
          </ul>
          <p className="mt-4">For any currency conversion feature to work, make sure the API key is valid and the network allows external API calls.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default AboutPage;

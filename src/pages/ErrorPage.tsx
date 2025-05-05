
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const ErrorPage: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center p-6">
      <div className="text-6xl font-bold text-red-500 mb-4">404</div>
      <h1 className="text-3xl font-bold mb-4">Page Not Found</h1>
      <p className="text-lg text-center mb-8 max-w-md">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Button asChild className="bg-loanBlue hover:bg-blue-700">
        <Link to="/">Return to Home</Link>
      </Button>
    </div>
  );
};

export default ErrorPage;

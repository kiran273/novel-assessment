
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Switch } from "@/components/ui/switch";
import { useTheme } from "@/hooks/useTheme";
import { Menu, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="header-nav w-full py-4 px-4 md:px-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="font-bold text-lg">
          <Link to="/">Loan Calculator</Link>
        </div>
        
        {isMobile ? (
          <div className="flex items-center">
            <Switch
              checked={isDarkMode}
              onCheckedChange={toggleTheme}
              className="mr-4"
            />
            <button onClick={toggleMenu} className="focus:outline-none">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        ) : (
          <div className="flex items-center space-x-6">
            <Link to="/" className="hover:opacity-80">HOME</Link>
            <Link to="/exchange-rates" className="hover:opacity-80">EXCHANGE RATES (LIVE)</Link>
            <Link to="/about" className="hover:opacity-80">ABOUT</Link>
            <Link to="/error" className="hover:opacity-80">ERROR PAGE</Link>
            <Switch
              checked={isDarkMode}
              onCheckedChange={toggleTheme}
              className="ml-4"
            />
          </div>
        )}
      </div>

      {/* Mobile menu */}
      {isMobile && isMenuOpen && (
        <div className="container mx-auto mt-4 pb-4 flex flex-col space-y-4">
          <Link to="/" className="hover:opacity-80" onClick={toggleMenu}>HOME</Link>
          <Link to="/exchange-rates" className="hover:opacity-80" onClick={toggleMenu}>EXCHANGE RATES (LIVE)</Link>
          <Link to="/about" className="hover:opacity-80" onClick={toggleMenu}>ABOUT</Link>
          <Link to="/error" className="hover:opacity-80" onClick={toggleMenu}>ERROR PAGE</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

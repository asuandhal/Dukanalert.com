
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import LangToggle from './LangToggle';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <nav className="w-full py-4 bg-white shadow-sm">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-brand-500 flex items-center justify-center text-white font-bold">
            WR
          </div>
          <span className="text-xl font-bold text-brand-500">DukanAlert</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/plans" className="text-gray-600 hover:text-brand-500">
            {t.pricing}
          </Link>
          <LangToggle />
          <Link to="/login">
            <Button variant="outline" className="mr-2">
              {t.login}
            </Button>
          </Link>
          <Link to="/signup">
            <Button>{t.signup}</Button>
          </Link>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-md py-4 px-4 z-50">
          <div className="flex flex-col gap-4">
            <Link to="/plans" className="text-gray-600 hover:text-brand-500 py-2">
              {t.pricing}
            </Link>
            <LangToggle />
            <Link to="/login" className="w-full">
              <Button variant="outline" className="w-full mb-2">
                {t.login}
              </Button>
            </Link>
            <Link to="/signup" className="w-full">
              <Button className="w-full">{t.signup}</Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;


import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, MessageSquare, Users, Settings, BarChart } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';

const MobileDashboardNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { language } = useLanguage();
  const t = translations[language];
  
  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { 
      path: '/dashboard', 
      label: t.dashboard, 
      icon: <BarChart size={20} /> 
    },
    { 
      path: '/campaigns', 
      label: t.campaigns,
      icon: <MessageSquare size={20} /> 
    },
    { 
      path: '/contacts', 
      label: t.contacts, 
      icon: <Users size={20} /> 
    },
    { 
      path: '/settings', 
      label: t.settings, 
      icon: <Settings size={20} /> 
    },
  ];

  return (
    <div className="md:hidden">
      <div className="flex items-center justify-between p-4 border-b">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-brand-500 flex items-center justify-center text-white font-bold">
            WR
          </div>
          <span className="text-xl font-bold text-brand-500">DukanAlert</span>
        </Link>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <nav className="p-4 space-y-2 bg-white border-b shadow-md">
          {navItems.map((item) => (
            <Link key={item.path} to={item.path} onClick={() => setIsMenuOpen(false)}>
              <Button
                variant={isActive(item.path) ? 'default' : 'ghost'}
                className={`w-full justify-start gap-3 ${isActive(item.path) ? '' : 'hover:bg-gray-100'}`}
              >
                {item.icon}
                {item.label}
              </Button>
            </Link>
          ))}
          <Link to="/plans" onClick={() => setIsMenuOpen(false)}>
            <Button variant="outline" className="w-full justify-start gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V8.25m4.5-1.5V8.25m-9 2.25v9.75c0 .414.336.75.75.75h16.5a.75.75 0 0 0 .75-.75v-9.75c0-.414-.336-.75-.75-.75H4.5a.75.75 0 0 0-.75.75ZM8.278 15.75a3 3 0 0 1-3.106-1.18.75.75 0 0 0-.675-.344h-.257a.75.75 0 0 1-.538-1.273l7.386-7.386a.75.75 0 0 1 1.06 0l7.387 7.386a.75.75 0 0 1-.538 1.273h-.257a.75.75 0 0 0-.675.344 3 3 0 0 1-3.106 1.18 3 3 0 0 1-2.867 0 3 3 0 0 1-2.867 0 3 3 0 0 1-1.847 0Z" />
              </svg>
              {t.upgradePlan}
            </Button>
          </Link>
        </nav>
      )}
    </div>
  );
};

export default MobileDashboardNav;

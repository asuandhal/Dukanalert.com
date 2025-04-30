
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { LanguageProvider, useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';
import LangToggle from '@/components/LangToggle';

const SignupContent = () => {
  const { language } = useLanguage();
  const t = translations[language];
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle signup - just navigation for now
    window.location.href = '/dashboard';
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-brand-500 flex items-center justify-center text-white font-bold">
              WR
            </div>
            <span className="text-xl font-bold text-brand-500">DukanAlert</span>
          </Link>
          <LangToggle />
        </div>
      </header>
      
      <main className="flex-grow flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <h1 className={`text-2xl font-bold ${language === 'hi' ? 'font-hindi' : ''}`}>{t.welcomeTo}</h1>
            <p className="text-gray-500 mt-2">{t.signupSubtitle}</p>
          </div>
          
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <Label htmlFor="businessName">{t.businessName}</Label>
                <Input id="businessName" required />
              </div>
              <div>
                <Label htmlFor="email">{t.email}</Label>
                <Input id="email" type="email" required />
              </div>
              <div>
                <Label htmlFor="phone">{t.phoneNumber}</Label>
                <Input id="phone" type="tel" required />
              </div>
              <div>
                <Label htmlFor="password">{t.password}</Label>
                <Input id="password" type="password" required />
              </div>
              <div>
                <Label htmlFor="confirmPassword">{t.confirmPassword}</Label>
                <Input id="confirmPassword" type="password" required />
              </div>
              <Button type="submit" className="w-full">
                {t.signup}
              </Button>
            </div>
          </form>
          
          <div className="text-center mt-6">
            <p className="text-sm text-gray-500">
              {t.alreadyHaveAccount}{' '}
              <Link to="/login" className="text-brand-500 hover:underline">
                {t.loginInstead}
              </Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

const Signup = () => {
  return (
    <LanguageProvider>
      <SignupContent />
    </LanguageProvider>
  );
};

export default Signup;

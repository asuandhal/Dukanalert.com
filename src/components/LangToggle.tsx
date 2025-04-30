
import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const LangToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex gap-2">
      <Button 
        variant={language === 'en' ? "default" : "outline"} 
        size="sm"
        onClick={() => setLanguage('en')}
        className="text-sm"
      >
        English
      </Button>
      <Button 
        variant={language === 'hi' ? "default" : "outline"} 
        size="sm"
        onClick={() => setLanguage('hi')}
        className="text-sm font-hindi"
      >
        हिन्दी
      </Button>
    </div>
  );
};

export default LangToggle;

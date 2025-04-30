
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  cta: string;
  popular?: boolean;
  monthlyMessages: string;
  templates: string;
}

const PricingCard = ({ title, price, features, cta, popular = false, monthlyMessages, templates }: PricingCardProps) => {
  return (
    <div className={`rounded-xl border shadow-lg p-6 ${popular ? 'border-brand-500 shadow-brand-100' : 'border-gray-200'}`}>
      {popular && (
        <div className="bg-accent1-500 text-white px-4 py-1 rounded-full text-sm font-medium inline-block mb-4">
          Popular
        </div>
      )}
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <div className="mb-6">
        <span className="text-3xl font-bold">{price}</span>
        {price !== "₹0" && <span className="text-gray-500">/month</span>}
      </div>
      
      <div className="space-y-4 mb-6">
        <div className="flex items-center gap-2">
          <div className="bg-brand-50 p-1.5 rounded-full">
            <Check size={16} className="text-brand-500" />
          </div>
          <span className="text-gray-600">{monthlyMessages}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="bg-brand-50 p-1.5 rounded-full">
            <Check size={16} className="text-brand-500" />
          </div>
          <span className="text-gray-600">{templates}</span>
        </div>
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-2">
            <div className="bg-brand-50 p-1.5 rounded-full">
              <Check size={16} className="text-brand-500" />
            </div>
            <span className="text-gray-600">{feature}</span>
          </div>
        ))}
      </div>
      
      <Button className={`w-full ${popular ? '' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}>
        {cta}
      </Button>
    </div>
  );
};

export default PricingCard;


import React from 'react';
import { LanguageProvider, useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PricingCard from '@/components/PricingCard';

const PlansContent = () => {
  const { language } = useLanguage();
  const t = translations[language];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className={`text-4xl font-bold mb-4 ${language === 'hi' ? 'font-hindi' : ''}`}>{t.pricingTitle}</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t.pricingSubtitle}</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <PricingCard
              title={t.freePlan}
              price="₹0"
              features={[t.analytics]}
              cta={t.startFree}
              monthlyMessages={t.monthlyMessages}
              templates={t.templates}
            />
            <PricingCard
              title={t.basicPlan}
              price="₹199"
              features={[t.analytics]}
              cta={t.startBasic}
              monthlyMessages={t.basicMonthlyMessages}
              templates={t.basicTemplates}
            />
            <PricingCard
              title={t.proPlan}
              price="₹499"
              features={[t.advancedAnalytics, t.prioritySupport]}
              cta={t.startPro}
              popular={true}
              monthlyMessages={t.proMonthlyMessages}
              templates={t.proTemplates}
            />
            <PricingCard
              title={t.enterprisePlan}
              price="₹999"
              features={[t.advancedAnalytics, t.prioritySupport, t.customBranding]}
              cta={t.contactUs}
              monthlyMessages={t.enterpriseMonthlyMessages}
              templates={t.enterpriseTemplates}
            />
          </div>
          
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              {[
                {
                  q: language === 'en' ? "How do I connect my WhatsApp account?" : "मैं अपना WhatsApp अकाउंट कैसे कनेक्ट करूं?",
                  a: language === 'en' 
                    ? "We provide easy integration with WhatsApp Business API. Once you sign up, you'll receive step-by-step instructions to connect your account." 
                    : "हम WhatsApp बिजनेस API के साथ आसान इंटीग्रेशन प्रदान करते हैं। साइन अप करने के बाद, आपको अपना अकाउंट कनेक्ट करने के लिए स्टेप-बाय-स्टेप निर्देश मिलेंगे।"
                },
                {
                  q: language === 'en' ? "Can I upgrade or downgrade my plan anytime?" : "क्या मैं किसी भी समय अपना प्लान अपग्रेड या डाउनग्रेड कर सकता हूं?",
                  a: language === 'en'
                    ? "Yes, you can change your plan at any time. Changes will take effect from the next billing cycle."
                    : "हां, आप किसी भी समय अपना प्लान बदल सकते हैं। परिवर्तन अगले बिलिंग चक्र से प्रभावी होंगे।"
                },
                {
                  q: language === 'en' ? "What happens if I exceed my monthly message limit?" : "अगर मैं अपनी मासिक मैसेज सीमा पार कर दूं तो क्या होगा?",
                  a: language === 'en'
                    ? "If you exceed your monthly message limit, you can purchase additional message packs or upgrade to a higher plan."
                    : "यदि आप अपनी मासिक मैसेज सीमा पार कर देते हैं, तो आप अतिरिक्त मैसेज पैक खरीद सकते हैं या उच्च प्लान पर अपग्रेड कर सकते हैं।"
                },
                {
                  q: language === 'en' ? "Do you provide customer support?" : "क्या आप कस्टमर सपोर्ट प्रदान करते हैं?",
                  a: language === 'en'
                    ? "Yes, we offer email support for all plans. Pro and Enterprise plans also include priority support with faster response times."
                    : "हां, हम सभी प्लान के लिए ईमेल सपोर्ट प्रदान करते हैं। प्रो और एंटरप्राइज प्लान में तेज़ प्रतिक्रिया समय के साथ प्राथमिकता सपोर्ट भी शामिल है।"
                },
              ].map((faq, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm border p-6">
                  <h3 className="font-semibold text-lg mb-2">{faq.q}</h3>
                  <p className="text-gray-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

const Plans = () => {
  return (
    <LanguageProvider>
      <PlansContent />
    </LanguageProvider>
  );
};

export default Plans;


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FeatureCard from '@/components/FeatureCard';
import PricingCard from '@/components/PricingCard';
import TestimonialCard from '@/components/TestimonialCard';
import MessagePreview from '@/components/MessagePreview';
import { LanguageProvider, useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';
import { MessageSquare, Users, Calendar, BarChart } from 'lucide-react';

const IndexContent = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [demoMessage, setDemoMessage] = useState('');
  
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-12 md:py-24 bg-gradient-to-br from-brand-50 via-white to-accent1-500/10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className={`text-4xl md:text-5xl font-bold mb-6 text-gray-900 ${language === 'hi' ? 'font-hindi' : ''}`}>
                {t.heroTitle}
              </h1>
              <p className={`text-xl mb-8 text-gray-600 ${language === 'hi' ? 'font-hindi' : ''}`}>
                {t.heroSubtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/signup">
                  <Button size="lg">{t.getStarted}</Button>
                </Link>
                <Button size="lg" variant="outline">{t.seeDemo}</Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-8 -left-8 w-40 h-40 bg-accent1-500/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-brand-500/20 rounded-full blur-2xl"></div>
              <div className="relative bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
                <div className="bg-gray-100 p-4 rounded-lg mb-4">
                  <input
                    type="text"
                    value={demoMessage}
                    onChange={(e) => setDemoMessage(e.target.value)}
                    placeholder={language === 'en' ? "Type your message here..." : "अपना संदेश यहां लिखें..."}
                    className="w-full p-2 border rounded bg-white"
                  />
                  <div className="flex justify-end mt-2">
                    <Button size="sm" className="animate-message-send">
                      {language === 'en' ? "Send Reminder" : "रिमाइंडर भेजें"}
                    </Button>
                  </div>
                </div>
                <MessagePreview message={demoMessage} />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className={`text-3xl font-bold mb-4 ${language === 'hi' ? 'font-hindi' : ''}`}>{t.featuresTitle}</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={<Users size={24} className="text-brand-500" />}
              title={t.contact}
              description={t.contactDesc}
            />
            <FeatureCard
              icon={<MessageSquare size={24} className="text-brand-500" />}
              title={t.messages}
              description={t.messagesDesc}
            />
            <FeatureCard
              icon={<Calendar size={24} className="text-brand-500" />}
              title={t.schedule}
              description={t.scheduleDesc}
            />
            <FeatureCard
              icon={<BarChart size={24} className="text-brand-500" />}
              title={t.analytics}
              description={t.analyticsDesc}
            />
          </div>
        </div>
      </section>
      
      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className={`text-3xl font-bold mb-4 ${language === 'hi' ? 'font-hindi' : ''}`}>{t.howTitle}</h2>
            <p className="text-xl text-gray-600">{t.howSubtitle}</p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col">
              {[t.step1, t.step2, t.step3, t.step4, t.step5].map((step, index) => (
                <div key={index} className="flex items-start mb-8">
                  <div className="bg-brand-500 text-white h-8 w-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    {index + 1}
                  </div>
                  <div>
                    <p className="text-lg font-semibold">{step}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className={`text-3xl font-bold mb-4 ${language === 'hi' ? 'font-hindi' : ''}`}>{t.testimonialTitle}</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard
              quote={language === 'en' 
                ? "DukanAlert has increased my customer return rate by 30%. The WhatsApp reminders are so effective!" 
                : "दुकानअलर्ट ने मेरे कस्टमर रिटर्न रेट को 30% बढ़ा दिया है। WhatsApp रिमाइंडर बहुत प्रभावी हैं!"}
              author={language === 'en' ? "Rajesh Kumar" : "राजेश कुमार"}
              role={language === 'en' ? "Salon Owner" : "सैलून मालिक"}
            />
            <TestimonialCard
              quote={language === 'en' 
                ? "Easy to set up and my customers love getting appointment reminders. Worth every rupee!" 
                : "सेट अप करना आसान है और मेरे ग्राहक अपॉइंटमेंट रिमाइंडर पाना पसंद करते हैं। हर रुपए के लायक!"}
              author={language === 'en' ? "Priya Singh" : "प्रिया सिंह"}
              role={language === 'en' ? "Boutique Owner" : "बुटीक मालिक"}
            />
            <TestimonialCard
              quote={language === 'en' 
                ? "I use DukanAlert for my medical practice. Patients no longer miss appointments!" 
                : "मैं अपने मेडिकल प्रैक्टिस के लिए दुकानअलर्ट का उपयोग करता हूं। मरीज अब अपॉइंटमेंट नहीं चूकते!"}
              author={language === 'en' ? "Dr. Anand Sharma" : "डॉ. आनंद शर्मा"}
              role={language === 'en' ? "Dentist" : "दंत चिकित्सक"}
            />
          </div>
        </div>
      </section>
      
      {/* Pricing */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className={`text-3xl font-bold mb-4 ${language === 'hi' ? 'font-hindi' : ''}`}>{t.pricingTitle}</h2>
            <p className="text-xl text-gray-600">{t.pricingSubtitle}</p>
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
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 bg-brand-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className={`text-3xl font-bold mb-4 ${language === 'hi' ? 'font-hindi' : ''}`}>{t.ctaTitle}</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">{t.ctaSubtitle}</p>
          <Link to="/signup">
            <Button size="lg" variant="secondary">{t.startNow}</Button>
          </Link>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

const Index = () => {
  return (
    <LanguageProvider>
      <IndexContent />
    </LanguageProvider>
  );
};

export default Index;

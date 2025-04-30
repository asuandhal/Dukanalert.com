
import React from 'react';
import { LanguageProvider, useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';
import DashboardLayout from '@/components/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageSquare, ArrowRight, User, Check } from 'lucide-react';

const DashboardContent = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold">{t.welcomeBack}, Rahul!</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-3 mb-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              {t.messagesSent}
            </CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">
              +4 from yesterday
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              {t.messageDelivery}
            </CardTitle>
            <Check className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">98%</div>
            <p className="text-xs text-muted-foreground">
              +2% from last week
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              {t.customerResponses}
            </CardTitle>
            <User className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7</div>
            <p className="text-xs text-muted-foreground">
              +1 from yesterday
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="col-span-2 md:col-span-1">
          <CardHeader>
            <CardTitle>{t.recent}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {Array.from({ length: 3 }).map((_, index) => (
                <div key={index} className="flex items-center gap-4 border-b pb-4">
                  <div className="bg-brand-100 p-2 rounded-full">
                    <MessageSquare size={16} className="text-brand-500" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">Appointment Reminder</p>
                    <p className="text-sm text-muted-foreground">Sent to 12 customers</p>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {index === 0 ? "Just now" : index === 1 ? "2 hours ago" : "Yesterday"}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-2 md:col-span-1">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button className="w-full justify-between">
              {t.createCampaign}
              <ArrowRight size={16} />
            </Button>
            <Button variant="outline" className="w-full justify-between">
              Add New Contact
              <ArrowRight size={16} />
            </Button>
            <Button variant="outline" className="w-full justify-between">
              View Reports
              <ArrowRight size={16} />
            </Button>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

const Dashboard = () => {
  return (
    <LanguageProvider>
      <DashboardContent />
    </LanguageProvider>
  );
};

export default Dashboard;

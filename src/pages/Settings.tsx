
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { LanguageProvider } from '@/contexts/LanguageContext';
import DashboardLayout from '@/components/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const SettingsContent = () => {
  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Settings</h1>
      </div>

      <Tabs defaultValue="account">
        <TabsList className="mb-6 grid w-full grid-cols-3">
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="whatsapp">WhatsApp Connection</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>
        
        <TabsContent value="account">
          <Card>
            <CardHeader>
              <CardTitle>Account Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="businessName">Business Name</Label>
                  <Input id="businessName" defaultValue="My Shop" />
                </div>
                
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" defaultValue="business@example.com" />
                </div>
                
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" defaultValue="+91 98765 43210" />
                </div>
                
                <div>
                  <Label htmlFor="address">Business Address</Label>
                  <Input id="address" defaultValue="123 Main Street, Mumbai" />
                </div>
                
                <div className="pt-4">
                  <Button>Save Changes</Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Change Password</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="currentPassword">Current Password</Label>
                  <Input id="currentPassword" type="password" />
                </div>
                
                <div>
                  <Label htmlFor="newPassword">New Password</Label>
                  <Input id="newPassword" type="password" />
                </div>
                
                <div>
                  <Label htmlFor="confirmPassword">Confirm New Password</Label>
                  <Input id="confirmPassword" type="password" />
                </div>
                
                <div className="pt-4">
                  <Button>Update Password</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="whatsapp">
          <Card>
            <CardHeader>
              <CardTitle>WhatsApp API Connection</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-green-50 border border-green-200 rounded-md p-4 flex items-center mb-6">
                <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-green-700">
                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-green-800">Connected</h3>
                  <p className="text-sm text-green-700">Your WhatsApp Business account is connected and active.</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <Label htmlFor="apiKey">API Key</Label>
                  <div className="flex">
                    <Input 
                      id="apiKey" 
                      value="••••••••••••••••••••••••••" 
                      disabled 
                      className="rounded-r-none" 
                    />
                    <Button variant="outline" className="rounded-l-none border-l-0">
                      Show
                    </Button>
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="webhookUrl">Webhook URL</Label>
                  <Input id="webhookUrl" defaultValue="https://dukanalert.com/api/webhook/your-id" />
                </div>
                
                <div className="pt-4 flex gap-4">
                  <Button variant="outline">Regenerate API Key</Button>
                  <Button variant="destructive">Disconnect</Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Message Templates</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500 mb-4">
                Your approved WhatsApp templates can be used for sending messages to customers.
              </p>
              
              <div className="space-y-4 border rounded-md divide-y">
                <div className="p-4">
                  <h3 className="font-medium">Appointment Reminder</h3>
                  <p className="text-sm text-gray-500">Hello [name], this is a reminder for your appointment on [date] at [time]. Please reply to confirm.</p>
                </div>
                
                <div className="p-4">
                  <h3 className="font-medium">Payment Due</h3>
                  <p className="text-sm text-gray-500">Hello [name], your payment of [amount] is due on [date]. Please make the payment to avoid service interruption.</p>
                </div>
                
                <div className="p-4">
                  <h3 className="font-medium">Special Offer</h3>
                  <p className="text-sm text-gray-500">Hello [name], we have a special offer for you! Get [discount] off on your next purchase until [date].</p>
                </div>
              </div>
              
              <div className="mt-4">
                <Button>Add New Template</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Email Notifications</h3>
                    <p className="text-sm text-gray-500">Receive email updates about your campaigns</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Campaign Completion</h3>
                    <p className="text-sm text-gray-500">Get notified when your campaign finishes sending</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Low Credit Alerts</h3>
                    <p className="text-sm text-gray-500">Receive alerts when your message credits are running low</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Marketing Updates</h3>
                    <p className="text-sm text-gray-500">Receive product news and marketing communications</p>
                  </div>
                  <Switch />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  );
};

const Settings = () => {
  return (
    <LanguageProvider>
      <SettingsContent />
    </LanguageProvider>
  );
};

export default Settings;


import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { LanguageProvider } from '@/contexts/LanguageContext';
import DashboardLayout from '@/components/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import MessagePreview from '@/components/MessagePreview';

const CampaignsContent = () => {
  const [message, setMessage] = React.useState('');

  return (
    <DashboardLayout>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Campaigns</h1>
      </div>

      <Tabs defaultValue="create">
        <TabsList className="mb-6 grid w-full grid-cols-2">
          <TabsTrigger value="create">Create Campaign</TabsTrigger>
          <TabsTrigger value="history">Campaign History</TabsTrigger>
        </TabsList>
        
        <TabsContent value="create">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Message Details</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="campaignName">Campaign Name</Label>
                    <Input id="campaignName" placeholder="E.g. Monthly Discount Offer" />
                  </div>
                  
                  <div>
                    <Label htmlFor="audience">Select Audience</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select audience group" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Contacts</SelectItem>
                        <SelectItem value="regular">Regular Customers</SelectItem>
                        <SelectItem value="vip">VIP Customers</SelectItem>
                        <SelectItem value="new">New Customers</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Type your message here..." 
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="schedule">Schedule</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="When to send" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="now">Send Now</SelectItem>
                        <SelectItem value="later">Schedule for Later</SelectItem>
                        <SelectItem value="recurring">Set Recurring</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <Button className="w-full mt-4">Create Campaign</Button>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Message Preview</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center justify-center h-96">
                <MessagePreview message={message} />
                <p className="text-sm text-gray-500 mt-8 text-center max-w-xs">
                  This is how your message will appear to customers on WhatsApp
                </p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="history">
          <Card>
            <CardHeader>
              <CardTitle>Recent Campaigns</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {Array.from({ length: 5 }).map((_, index) => (
                  <div key={index} className="flex items-center justify-between border-b pb-4">
                    <div>
                      <h3 className="font-medium">
                        {index === 0 ? "Weekend Special Offer" : 
                         index === 1 ? "Appointment Reminder" :
                         index === 2 ? "New Product Announcement" :
                         index === 3 ? "Festival Sale" : "Customer Feedback Request"}
                      </h3>
                      <p className="text-sm text-gray-500">
                        Sent to {Math.floor(Math.random() * 50) + 10} contacts
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm">
                        {index === 0 ? "Today" : 
                         index === 1 ? "Yesterday" :
                         index === 2 ? "3 days ago" :
                         index === 3 ? "Last week" : "2 weeks ago"}
                      </p>
                      <p className="text-xs text-gray-500">
                        Delivered: {85 + index * 2}%
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  );
};

const Campaigns = () => {
  return (
    <LanguageProvider>
      <CampaignsContent />
    </LanguageProvider>
  );
};

export default Campaigns;

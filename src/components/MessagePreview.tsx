
import React from 'react';
import { MessageSquare } from 'lucide-react';

const MessagePreview = ({ message }: { message: string }) => {
  return (
    <div className="max-w-xs mx-auto">
      {/* WhatsApp chat bubble */}
      <div className="bg-[#dcf8c6] p-3 rounded-lg rounded-br-none relative shadow-md">
        <div className="mb-2 text-sm">
          {message || "Hello! This is your appointment reminder. See you soon!"}
        </div>
        <div className="flex justify-end items-center text-[#637a71] text-xs">
          <span>12:45 PM</span>
          <span className="ml-1">✓✓</span>
        </div>
        <div className="w-4 h-4 bg-[#dcf8c6] absolute -bottom-2 right-0 transform rotate-45 z-10"></div>
      </div>
      
      {/* Phone frame */}
      <div className="mt-4 flex items-center justify-between bg-[#075e54] text-white rounded-t-md p-2 text-xs">
        <div className="flex items-center gap-1">
          <MessageSquare size={12} />
          <span>WhatsApp</span>
        </div>
        <div className="flex items-center gap-1">
          <span>12:45</span>
        </div>
      </div>
    </div>
  );
};

export default MessagePreview;

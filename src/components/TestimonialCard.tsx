
import React from 'react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  image?: string;
}

const TestimonialCard = ({ quote, author, role, image }: TestimonialCardProps) => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow p-6">
      <div className="flex items-center gap-4 mb-4">
        <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
          {image ? (
            <img src={image} alt={author} className="h-full w-full object-cover" />
          ) : (
            <span className="text-xl font-semibold text-gray-500">{author.charAt(0)}</span>
          )}
        </div>
        <div>
          <h4 className="font-semibold">{author}</h4>
          <p className="text-gray-500 text-sm">{role}</p>
        </div>
      </div>
      <p className="text-gray-600 italic">"{quote}"</p>
    </div>
  );
};

export default TestimonialCard;

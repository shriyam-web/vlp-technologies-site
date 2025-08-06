'use client';

import { useState } from 'react';
import { MessageCircle, X, Phone, Mail } from 'lucide-react';

export function SupportWidget() {
  const [isOpen, setIsOpen] = useState(false);

  const whatsappMessage = encodeURIComponent(
    "Hi! I'm interested in your web/mobile development services. Could you please provide more information?"
  );

  const whatsappNumber = "1234567890"; // Replace with actual WhatsApp number

  return (
    <>
      {/* Support Widget Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110"
        >
          {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        </button>
      </div>

      {/* Support Widget Panel */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 bg-white rounded-lg shadow-xl border border-gray-200 w-80 z-50 animate-in slide-in-from-bottom-5">
          <div className="bg-blue-600 text-white p-4 rounded-t-lg">
            <h3 className="font-semibold">Need Help?</h3>
            <p className="text-sm text-blue-100">We're here to assist you!</p>
          </div>
          
          <div className="p-4 space-y-3">
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 p-3 rounded-lg bg-green-50 hover:bg-green-100 border border-green-200 transition-colors duration-200"
            >
              <div className="bg-green-500 text-white p-2 rounded-full">
                <MessageCircle className="h-4 w-4" />
              </div>
              <div>
                <p className="font-medium text-gray-900">WhatsApp Chat</p>
                <p className="text-sm text-gray-600">Quick response</p>
              </div>
            </a>

            <a
              href="tel:+15551234567"
              className="flex items-center space-x-3 p-3 rounded-lg bg-blue-50 hover:bg-blue-100 border border-blue-200 transition-colors duration-200"
            >
              <div className="bg-blue-500 text-white p-2 rounded-full">
                <Phone className="h-4 w-4" />
              </div>
              <div>
                <p className="font-medium text-gray-900">Call Us</p>
                <p className="text-sm text-gray-600">+1 (555) 123-4567</p>
              </div>
            </a>

            <a
              href="mailto:info@vlptechnologies.com"
              className="flex items-center space-x-3 p-3 rounded-lg bg-purple-50 hover:bg-purple-100 border border-purple-200 transition-colors duration-200"
            >
              <div className="bg-purple-500 text-white p-2 rounded-full">
                <Mail className="h-4 w-4" />
              </div>
              <div>
                <p className="font-medium text-gray-900">Email Us</p>
                <p className="text-sm text-gray-600">info@vlptechnologies.com</p>
              </div>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
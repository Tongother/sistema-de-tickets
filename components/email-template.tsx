/* eslint react/no-unescaped-entities */
import * as React from 'react';

interface EmailTemplateProps {
  firstName: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
}) => (
  <div className="bg-gray-200 p-4 rounded">
    <h1 className="text-gray-700 text-2xl mb-4">Welcome, {firstName}!</h1>
    <p className="text-gray-600 text-lg mb-8">
      We're excited to enviarte a la chingada.
    </p>
    <a href="https://example.com/confirm" className="text-blue-600 text-xl">
      Por favor, confirma que chingas a tu madre
    </a>
  </div>
);
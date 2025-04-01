// layout.tsx
"use client";
import { I18nextProvider } from 'react-i18next';
import i18n from './i18.ts'; // Import the i18n config

import { BrowserRouter } from 'react-router-dom';
import { ReactNode } from 'react';

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <I18nextProvider i18n={i18n}>
            <BrowserRouter>
              {children}
            </BrowserRouter>
          </I18nextProvider>
      </body>
    </html>
  );
}
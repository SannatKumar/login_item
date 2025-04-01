// layout.tsx
"use client";
import { I18nextProvider } from 'react-i18next';
import i18n from './i18.ts'; // Import the i18n config

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ReactNode } from 'react';

// import TheHeader from '..components/Header'; // Import your Header component
// import Home from '/pages/Home'; // Your Home page component
import YogaContent from '../pages/yogacontent.tsx'; // Yoga Content page component
import Images from '../pages/images.tsx'; // Images page component
import Pdfs from '../pages/pdfs.tsx'; // Pdfs page component
import Contact from '../pages/contact.tsx'; // Contact page component
import Links from '../pages/links.tsx';

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
            <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/yoga-content" element={<YogaContent />} />
            <Route path="/images" element={<Images />} />
            <Route path="/pdfs" element={<Pdfs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/links" element={<Links />} />
          </Routes>
              {children}
            </BrowserRouter>
          </I18nextProvider>
      </body>
    </html>
  );
}
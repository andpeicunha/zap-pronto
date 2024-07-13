'use client';
import { Inter } from 'next/font/google';
import { FormProvider, useForm } from 'react-hook-form';

import { NextAuthProvider } from '../lib/providers';

import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const methods = useForm();
  return (
    <html lang="pt-BR" className={inter.className}>
      <NextAuthProvider>
        <FormProvider {...methods}>
          <body>{children}</body>
        </FormProvider>
      </NextAuthProvider>
    </html>
  );
}

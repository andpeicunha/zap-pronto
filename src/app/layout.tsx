'use client'

import { NextAuthProvider } from '@/app/providers'
import { inter, lora, roboto } from '@/styles/fonts'
import { FormProvider, useForm } from 'react-hook-form'
import './globals.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const methods = useForm()
  return (
    <html lang="pt-BR" className={`${roboto.variable} ${inter.variable} ${lora.variable}`}>
      <NextAuthProvider>
        <FormProvider {...methods}>
          <body>{children}</body>
        </FormProvider>
      </NextAuthProvider>
    </html>
  )
}

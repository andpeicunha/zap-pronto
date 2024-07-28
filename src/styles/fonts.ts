import { Darker_Grotesque, Inter, Lato, Roboto } from 'next/font/google'

export const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'auto',
  variable: '--font-roboto',
})

export const grotesque = Darker_Grotesque({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'auto',
  variable: '--font-darker-grotesque',
})

export const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
})

export const lora = Lato({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '900'],
  variable: '--font-lato',
})

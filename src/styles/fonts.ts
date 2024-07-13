import { Darker_Grotesque, Inter, Lora, Roboto } from 'next/font/google';

export const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'auto',
  variable: '--font-roboto',
});

export const grotesque = Darker_Grotesque({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'auto',
  variable: '--font-darker-grotesque',
});

export const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
});

export const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-lora',
});

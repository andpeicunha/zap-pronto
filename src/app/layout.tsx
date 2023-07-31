'use client'
import { NextAuthProvider } from './lib/providers'

import './globals.css'

import { Inter } from 'next/font/google'

const inter = Inter({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700', '800', '900'],
})

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html
			lang='pt-BR'
			className={inter.className}
		>
			<NextAuthProvider>
				<body>{children}</body>
			</NextAuthProvider>
		</html>
	)
}

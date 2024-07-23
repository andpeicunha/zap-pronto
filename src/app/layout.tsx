import { Providers } from '@/app/providers'
import { inter, lora, roboto } from '@/styles/fonts'
import './globals.css'

export default function RootLayout({
	children,
}: { children: React.ReactNode }) {
	return (
		<html
			lang="pt-BR"
			className={`${roboto.variable} ${inter.variable} ${lora.variable}`}
		>
			<body>
				<Providers>{children}</Providers>
			</body>
		</html>
	)
}

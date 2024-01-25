import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "ClassClick",
	description: "Quality education is our passion",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
			<Script
				async
				src="https://www.googletagmanager.com/gtag/js?id=G-W9R8J55TPG"
			></Script>
			<Script id="gtag">
				{`window.dataLayer = window.dataLayer || [];
							function gtag(){dataLayer.push(arguments);}
							gtag('js', new Date());

							gtag('config', 'G-W9R8J55TPG');`}
			</Script>
		</html>
	);
}

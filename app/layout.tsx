import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";
import { GTProvider } from "gt-next";
const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "IndexPHL | Your Guide to Philly Resources",
	description: "IndexPHL: An AI-powered civic guide to essential local resources in Philadelphia for residents and newcomers - food, housing, health, and more.",
};


export default async function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html>
			<body
				className={`bg-white dark:bg-gray-900 ${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<GTProvider>
					<Navbar />
					{children}
					<Footer />
				</GTProvider>
			</body>
		</html>
	);
}
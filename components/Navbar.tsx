'use client';

import Link from "next/link";
import Image from "next/image";

import { T, useLocale, useSetLocale } from "gt-next/client";

export default function Navbar() {
	const locale = useLocale();
	const setLocale = useSetLocale();

	const handleLocaleChange = (newLocale: string) => {
		setLocale(newLocale);
	};

	const supportedLocales = [
		{ code: 'en', name: 'English' },
		{ code: 'es', name: 'Español' },
		{ code: 'uk', name: 'Українська' },
	];

	return (
		<T id="components.navbar.0">
			<nav className="w-full bg-[#1c398e] dark:bg-gray-950 px-6 py-4">
				<div className="flex flex-row items-center gap-6 w=full">
					<Link href="/">
						<Image
							src="/logo.png"
							alt="IndexPHL Logo"
							width={50}
							height={50}
							className="object-contain inline-block"
						/>
					</Link>
					<Link
						href="/categories"
						className="text-white dark:text-white font-medium hover:underline"
					>
						Categories
					</Link>
					<Link href="/map" className="text-white dark:text-white font-medium hover:underline">
						Map
					</Link>
					<Link
						href="/submit"
						className="text-white dark:text-white font-medium hover:underline"
					>
						Submit a Resource
					</Link>
					<Link
						href="/about"
						className="text-white dark:text-white font-medium hover:underline"
					>
						About
					</Link>

					<div className="ml-auto flex items-center space-x-2">
						{supportedLocales.map((supportedLocale) => (
							<button
								key={supportedLocale.code}
								onClick={() => handleLocaleChange(supportedLocale.code)}
								className={`text-sm font-medium ${locale === supportedLocale.code
									? 'text-yellow-400 dark:text-yellow-300 underline'
									: 'text-white dark:text-white hover:underline'
									}`}
							>
								{supportedLocale.name}
							</button>
						))}
					</div>
				</div>
			</nav>
		</T>
	);
}
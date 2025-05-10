"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { T } from "gt-next";

const InteractiveMap = dynamic(() => import("@/components/InteractiveMap"), {
	ssr: false,
});

import AIpoweredSearch from "@/components/AIpoweredSearch";

export default function Home() {
	return (
		<T id="page.0">
			<section className="min-h-screen px-4 py-8 bg-white dark:bg-gray-900">
				<div className="max-w-7xl mx-auto">
					<div className="mb-10 text-center">
						<h1 className="text-4xl md:text-5xl font-bold text-blue-900 dark:text-blue-300 mb-4">
							Welcome to IndexPHL
						</h1>
						<p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
							Find local resources across Philadelphia: food, housing, health,
							transit & more.
						</p>
						<div className="flex justify-center items-center">
							<AIpoweredSearch />
						</div>
					</div>

					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
						<Link href="/categories/housing">
							<div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition-shadow cursor-pointer dark:shadow-gray-700 hover:dark:shadow-gray-600">
								<h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
									Housing
								</h2>
								<p className="text-gray-700 dark:text-gray-300">
									Find safe and affordable housing options.
								</p>
							</div>
						</Link>
						<Link href="/categories/food">
							<div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition-shadow cursor-pointer dark:shadow-gray-700 hover:dark:shadow-gray-600">
								<h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
									Food
								</h2>
								<p className="text-gray-700 dark:text-gray-300">
									Locate food banks and pantries near you.
								</p>
							</div>
						</Link>
						<Link href="/categories/health">
							<div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition-shadow cursor-pointer dark:shadow-gray-700 hover:dark:shadow-gray-600">
								<h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
									Health
								</h2>
								<p className="text-gray-700 dark:text-gray-300">
									Access local health services and support.
								</p>
							</div>
						</Link>
					</div>

					<InteractiveMap />
				</div>
			</section>
		</T>
	);
}
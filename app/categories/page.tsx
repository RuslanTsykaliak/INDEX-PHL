import Link from "next/link";

import { Var, T } from "gt-next";

export default function CategoriesPage() {
	const categories = [
		{
			name: "Housing",
			description: "Find safe and affordable housing options.",
			path: "/categories/housing",
		},
		{
			name: "Food",
			description: "Locate food banks and pantries near you.",
			path: "/categories/food",
		},
		{
			name: "Health",
			description: "Access local health services and support.",
			path: "/categories/health",
		},
	];

	return (
		<T id="categories.page.0">
			<div className="p-4 max-w-7xl mx-auto min-h-screen">
				<h1 className="text-4xl md:text-5xl font-bold text-blue-900 dark:text-blue-300 mb-6 text-center">
					Resource Categories
				</h1>
				<p className="text-lg text-gray-700 dark:text-gray-300 mb-10 text-center">
					Browse resources by category to find the help you need.
				</p>

				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
					<Var>
						{categories.map((category) => (
							<Link href={category.path} key={category.name}>
								<div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition-shadow cursor-pointer dark:shadow-gray-700 hover:dark:shadow-gray-600">
									<h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
										{category.name}
									</h2>
									<p className="text-gray-700 dark:text-gray-300">{category.description}</p>
								</div>
							</Link>
						))}
					</Var>
				</div>
			</div>
		</T>
	);
}
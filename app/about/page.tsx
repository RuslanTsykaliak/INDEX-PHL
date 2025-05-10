"use client";

import Link from "next/link";
import { T } from "gt-next";

export default function AboutPage() {
	return (
		<T id="about.page.0">
			<section className="min-h-screen p-6">
				<div className="max-w-5xl mx-auto">
					<div className="mb-8 text-center">
						<h1 className="text-3xl font-bold text-blue-900 dark:text-blue-300 mb-2">
							About IndexPHL
						</h1>
						<p className="text-lg text-gray-700 dark:text-gray-300">
							Your Guide to Navigating Philly, One Resource at a Time
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
						<div className="md:col-span-2">
							<div className="bg-white dark:bg-gray-800 rounded-lg shadow dark:shadow-gray-700 p-6 mb-6">
								<h2 className="text-xl font-semibold text-blue-800 dark:text-blue-300 mb-4">
									Our Mission
								</h2>
								<p className="text-gray-700 dark:text-gray-300 mb-4">
									IndexPHL is an AI-powered civic guide that helps Philadelphia
									residents–especially newcomers and underserved
									communities–find essential local resources fast. Our mission
									is to build a digital front door to Philadelphia&apos;s most
									critical services, making them accessible, updated, and
									human-centered.
								</p>
								<p className="text-gray-700 dark:text-gray-300">
									Whether you&apos;re new to the city or facing a tough time,
									IndexPHL empowers you to find the help you need without the
									overwhelm. We&apos;re building the future of Philly through
									technology and community.
									{/* Add other paragraphs if needed, applying dark:text-gray-300 */}
								</p>
							</div>

							<div className="bg-white dark:bg-gray-800 rounded-lg shadow dark:shadow-gray-700 p-6 mb-6">
								<h2 className="text-xl font-semibold text-blue-800 dark:text-blue-300 mb-4">
									Problem & Solution
								</h2>
								<div className="mb-4">
									<h3 className="font-medium text-gray-900 dark:text-gray-100 mb-2">
										The Challenge
									</h3>
									<p className="text-gray-700 dark:text-gray-300">
										Navigating local resources in Philadelphia can be confusing,
										overwhelming, and time-consuming, especially for newcomers,
										low-income residents, our elderly community, and non-native
										English speakers. Critical information like housing aid,
										food pantries, emergency contacts, or animal rescue services
										is often scattered across outdated websites, PDFs, or hidden
										deep within government portals. As a result, people miss out
										on help they&apos;re eligible for simply because they
										don&apos;t know where to look or how to ask.
									</p>
								</div>
								<div>
									<h3 className="font-medium text-gray-900 dark:text-gray-100 mb-2">
										Our Solution
									</h3>
									<p className="text-gray-700 dark:text-gray-300">
										IndexPHL brings together essential Philly resources into one
										searchable, multilingual platform. Using real-time data from
										OpenDataPhilly and resource tracking, we categorize and map
										out housing support, food access points, legal aid,
										emergency hotlines, and more. With an interactive interface,
										smart search, and an AI assistant, our site ensures
										residents can quickly find the help they need—without
										jumping through hoops or digging through outdated links.
									</p>
								</div>
							</div>

							<div className="bg-white dark:bg-gray-800 rounded-lg shadow dark:shadow-gray-700 p-6">
								<h2 className="text-xl font-semibold text-blue-800 dark:text-blue-300 mb-4">
									Key Features
								</h2>
								<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
									<div className="p-4 border border-gray-100 dark:border-gray-700 rounded-lg dark:bg-gray-800">
										<h3 className="font-medium text-gray-900 dark:text-gray-100 mb-2">
											Interactive Map
										</h3>
										<p className="text-gray-700 dark:text-gray-300">
											Explore resource locations across Philadelphia with our
											dynamic, easy-to-use map.
										</p>
									</div>
									<div className="p-4 border border-gray-100 dark:border-gray-700 rounded-lg dark:bg-gray-800">
										<h3 className="font-medium text-gray-900 dark:text-gray-100 mb-2">
											Categorized Directory
										</h3>
										<p className="text-gray-700 dark:text-gray-300">
											Browse organized lists of local services for effortless
											discovery.
										</p>
									</div>
									<div className="p-4 border border-gray-100 dark:border-gray-700 rounded-lg dark:bg-gray-800">
										<h3 className="font-medium text-gray-900 dark:text-gray-100 mb-2">
											AI-Powered Search
										</h3>
										<p className="text-gray-700 dark:text-gray-300">
											Quickly find Philly resources with smart, context-aware
											results.
										</p>
									</div>
									<div className="p-4 border border-gray-100 dark:border-gray-700 rounded-lg dark:bg-gray-800">
										<h3 className="font-medium text-gray-900 dark:text-gray-100 mb-2">
											AI Assistant
										</h3>
										<p className="text-gray-700 dark:text-gray-300">
											Get guided, personalized search suggestions to refine your
											queries.
										</p>
									</div>
								</div>
							</div>
						</div>

						<div className="md:col-span-1">
							<div className="bg-white dark:bg-gray-800 rounded-lg shadow dark:shadow-gray-700 p-6 mb-6">
								<h2 className="text-xl font-semibold text-blue-800 dark:text-blue-300 mb-4">
									Our Team
								</h2>
								<div className="space-y-4">
									<div className="p-3 bg-gray-50 dark:bg-gray-700 rounded">
										<h3 className="font-medium text-gray-900 dark:text-gray-100">Lillian Gil</h3>
										<p className="text-gray-700 dark:text-gray-300 text-sm">
											Project Lead & Designer
										</p>
										<p className="text-blue-600 dark:text-blue-400 text-sm break-words">
											lillianmarlee@gmail.com
										</p>
									</div>
									<div className="p-3 bg-gray-50 dark:bg-gray-700 rounded">
										<h3 className="font-medium text-gray-900 dark:text-gray-100">
											Ruslan Tsykaliak
										</h3>
										<p className="text-gray-700 dark:text-gray-300 text-sm">
											Full Stack Developer
										</p>
										<p className="text-blue-600 dark:text-blue-400 text-sm break-words">
											ruslan.tsykaliak@gmail.com
										</p>
									</div>
								</div>
							</div>

							<div className="bg-white dark:bg-gray-800 rounded-lg shadow dark:shadow-gray-700 p-6 mb-6">
								<h2 className="text-xl font-semibold text-blue-800 dark:text-blue-300 mb-4">
									Technologies Used
								</h2>
								<ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
									<li>React & Next.js</li>
									<li>Tailwind CSS</li>
									<li>OpenDataPhilly API</li>
									<li>Interactive Mapping</li>
									<li>AI-powered search</li>
								</ul>
							</div>

							<div className="bg-blue-50 dark:bg-blue-900 rounded-lg shadow dark:shadow-gray-700 p-6">
								<h2 className="text-xl font-semibold text-blue-800 dark:text-blue-300 mb-4">
									Get Involved
								</h2>
								<p className="text-gray-700 dark:text-gray-300 mb-4">
									Know a resource that should be listed? Have feedback or want
									to contribute?
								</p>
								<div className="space-y-3">
									<Link
										href="/submit"
										className="block w-full bg-blue-600 dark:bg-blue-800 text-white dark:text-white text-center px-4 py-2 rounded hover:bg-blue-700 dark:hover:bg-blue-700 transition-colors"
									>
										Submit a Resource
									</Link>
									<a
										href="https://github.com/RuslanTsykaliak/INDEX-PHL"
										target="_blank"
										rel="noopener noreferrer"
										className="block w-full bg-gray-600 dark:bg-gray-700 text-white dark:text-white text-center px-4 py-2 rounded hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
									>
										View on GitHub
									</a>
								</div>
							</div>
						</div>
					</div>

					<div className="text-center text-gray-600 dark:text-gray-400 mt-8">
						<p>© 2025 IndexPHL. Built with ❤️ in Philadelphia.</p>
					</div>
				</div>
			</section>
		</T>
	);
}
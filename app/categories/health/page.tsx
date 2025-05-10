"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

import resourcesData from "../../../data/resources.json";
import { T, Var } from "gt-next";

const InteractiveMap = dynamic(() => import("@/components/InteractiveMap"), {
	ssr: false,
	loading: () => (
		<T id="categories.health.page.0">
			<div className="flex justify-center items-center h-full p-6 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg">
				<p>Loading map...</p>
			</div>
		</T>
	),
});

export default function HealthPage() {
	interface Resource {
		id: string;
		name: string;
		description: string;
		address: string;
		phone: string;
		website: string;
		hours: string;
		eligibility: string;
	}

	const [resources, setResources] = useState<Resource[]>([]);

	useEffect(() => {
		setResources(resourcesData.health);
	}, []);

	return (
		<T id="categories.health.page.2">
			<section className="min-h-screen p-6">
				<div className="max-w-7xl mx-auto">
					<div className="mb-6">
						<h1 className="text-3xl font-bold text-blue-900 dark:text-blue-300 mb-2">
							Health Resources
						</h1>
						<p className="text-lg text-gray-700 dark:text-gray-300">
							Access local health services and support in Philadelphia.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						<div className="md:col-span-2">
							<div className="bg-white dark:bg-gray-800 rounded-lg shadow dark:shadow-gray-700 p-6 mb-6">
								<h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
									Available Resources
								</h2>

								<Var>
									{resources.length > 0 ? (
										resources.map((resource) => (
											<T id="categories.health.page.3" key={resource.id}>
												<div className="mb-6 bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
													<h3 className="text-xl font-semibold text-blue-800 dark:text-blue-300">
														<Var>{resource.name}</Var>
													</h3>
													<p className="text-gray-700 dark:text-gray-300 my-2">
														<Var>{resource.description}</Var>
													</p>

													<div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
														<div>
															<h4 className="font-medium text-gray-900 dark:text-gray-100">
																Contact Information
															</h4>
															<p className="text-gray-700 dark:text-gray-300">
																Address: <Var>{resource.address}</Var>
															</p>
															<p className="text-gray-700 dark:text-gray-300">
																Phone: <Var>{resource.phone}</Var>
															</p>
															<p className="text-gray-700 dark:text-gray-300">
																Website:{" "}
																<a
																	href={resource.website}
																	target="_blank"
																	rel="noopener noreferrer"
																	className="text-blue-600 dark:text-blue-400 hover:underline"
																>
																	<Var>{resource.website}</Var>
																</a>
															</p>
														</div>

														<div>
															<h4 className="font-medium text-gray-900 dark:text-gray-100">
																Hours & Eligibility
															</h4>
															<p className="text-gray-700 dark:text-gray-300">
																<Var>{resource.hours}</Var>
															</p>
															<p className="text-gray-700 dark:text-gray-300 mt-2">
																<Var>{resource.eligibility}</Var>
															</p>
														</div>
													</div>
												</div>
											</T>
										))
									) : (
										<T id="categories.health.page.1">
											<p className="text-gray-700 dark:text-gray-300">Loading resources...</p>
										</T>
									)}
								</Var>
							</div>

							<div className="bg-white dark:bg-gray-800 rounded-lg shadow dark:shadow-gray-700 p-6">
								<h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
									Health Emergency Information
								</h2>
								<p className="text-gray-700 dark:text-gray-300 mb-4">
									For medical emergencies, always call 911. For other health
									needs:
								</p>
								<ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
									<li>
										Philadelphia Department of Public Health: 215-686-5000
									</li>
									<li>Mental Health Crisis Line: 215-685-6440 (24/7)</li>
									<li>Poison Control Center: 800-222-1222</li>
									<li>COVID-19 Helpline: 800-722-7112</li>
								</ul>
								<div className="mt-6">
									<Link
										href="/submit"
										className="bg-blue-600 dark:bg-blue-800 text-white dark:text-white px-4 py-2 rounded hover:bg-blue-700 dark:hover:bg-blue-700 transition-colors"
									>
										Submit a Health Resource
									</Link>
								</div>
							</div>
						</div>

						<div className="md:col-span-1">
							<div className="bg-white dark:bg-gray-800 rounded-lg shadow dark:shadow-gray-700 p-6 mb-6">
								<h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Resource Map</h2>
								<div className="h-64">
									<InteractiveMap />
								</div>
							</div>

							<div className="bg-white dark:bg-gray-800 rounded-lg shadow dark:shadow-gray-700 p-6">
								<h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
									Health Service Types
								</h2>
								<ul className="space-y-2">
									<li className="flex items-center">
										<span className="w-3 h-3 bg-red-500 dark:bg-red-400 rounded-full mr-2"></span>
										<span className="text-gray-700 dark:text-gray-300">Primary Care</span>
									</li>
									<li className="flex items-center">
										<span className="w-3 h-3 bg-blue-500 dark:bg-blue-400 rounded-full mr-2"></span>
										<span className="text-gray-700 dark:text-gray-300">Mental Health</span>
									</li>
									<li className="flex items-center">
										<span className="w-3 h-3 bg-green-500 dark:bg-green-400 rounded-full mr-2"></span>
										<span className="text-gray-700 dark:text-gray-300">
											Substance Use Treatment
										</span>
									</li>
									<li className="flex items-center">
										<span className="w-3 h-3 bg-purple-500 dark:bg-purple-400 rounded-full mr-2"></span>
										<span className="text-gray-700 dark:text-gray-300">Dental Care</span>
									</li>
								</ul>

								<h2 className="text-xl font-semibold mb-4 mt-6 text-gray-900 dark:text-gray-100">
									Service Features
								</h2>
								<div className="space-y-2">
									<div className="flex items-center">
										<input
											type="checkbox"
											id="sliding-scale"
											className="mr-2"
										/>
										<label htmlFor="sliding-scale" className="text-gray-700 dark:text-gray-300">
											Sliding Scale Fees
										</label>
									</div>
									<div className="flex items-center">
										<input type="checkbox" id="insurance" className="mr-2" />
										<label htmlFor="insurance" className="text-gray-700 dark:text-gray-300">
											Accepts Insurance
										</label>
									</div>
									<div className="flex items-center">
										<input type="checkbox" id="walk-in" className="mr-2" />
										<label htmlFor="walk-in" className="text-gray-700 dark:text-gray-300">
											Walk-ins Welcome
										</label>
									</div>
									<div className="flex items-center">
										<input type="checkbox" id="telehealth" className="mr-2" />
										<label htmlFor="telehealth" className="text-gray-700 dark:text-gray-300">
											Telehealth Available
										</label>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</T>
	);
}
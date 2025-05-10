"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

// Import will be replaced with actual data fetching
import resourcesData from "../../../data/resources.json";
import { T, Var } from "gt-next";

const InteractiveMap = dynamic(() => import("@/components/InteractiveMap"), {
	ssr: false,
	loading: () => (
		<T id="categories.food.page.0">
			<p>Loading map...</p>
		</T>
	),
});

export default function FoodPage() {
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
		// In a real app, this would be an API call
		setResources(resourcesData.food);
	}, []);

	return (
		<T id="categories.food.page.2">
			<section className="min-h-screen p-6">
				<div className="max-w-7xl mx-auto">
					<div className="mb-6">
						<h1 className="text-3xl font-bold text-blue-900 mb-2">
							Food Resources
						</h1>
						<p className="text-lg text-gray-700">
							Locate food banks and pantries near you in Philadelphia.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						{/* Left side: Resource list */}
						<div className="md:col-span-2">
							<div className="bg-white rounded-lg shadow p-6 mb-6">
								<h2 className="text-xl font-semibold mb-4">
									Available Resources
								</h2>

								<Var>
									{resources.length > 0 ? (
										resources.map((resource) => (
											<T id="categories.food.page.3" key={resource.id}>
												<div
													className="mb-6 bg-gray-50 p-4 rounded-lg"
												>
													<h3 className="text-xl font-semibold text-blue-800">
														<Var>{resource.name}</Var>
													</h3>
													<p className="text-gray-700 my-2">
														<Var>{resource.description}</Var>
													</p>

													<div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
														<div>
															<h4 className="font-medium text-gray-900">
																Contact Information
															</h4>
															<p className="text-gray-700">
																Address: <Var>{resource.address}</Var>
															</p>
															<p className="text-gray-700">
																Phone: <Var>{resource.phone}</Var>
															</p>
															<p className="text-gray-700">
																Website:{" "}
																<a
																	href={resource.website}
																	target="_blank"
																	rel="noopener noreferrer"
																	className="text-blue-600 hover:underline"
																>
																	<Var>{resource.website}</Var>
																</a>
															</p>
														</div>

														<div>
															<h4 className="font-medium text-gray-900">
																Hours & Eligibility
															</h4>
															<p className="text-gray-700">
																<Var>{resource.hours}</Var>
															</p>
															<p className="text-gray-700 mt-2">
																<Var>{resource.eligibility}</Var>
															</p>
														</div>
													</div>
												</div>
											</T>
										))
									) : (
										<T id="categories.food.page.1">
											<p className="text-gray-700">Loading resources...</p>
										</T>
									)}
								</Var>
							</div>

							<div className="bg-white rounded-lg shadow p-6">
								<h2 className="text-xl font-semibold mb-4">
									Need Immediate Food Assistance?
								</h2>
								<p className="text-gray-700 mb-4">
									If you need immediate food assistance or can&#39;t find what
									you&#39;re looking for, consider these additional resources:
								</p>
								<ul className="list-disc list-inside text-gray-700 space-y-2">
									<li>Call the WhyHunger Hotline: 1-800-5-HUNGRY</li>
									<li>Text your ZIP code to 1-800-548-6479</li>
									<li>
										Contact Benefits Data Trust: 833-373-5868 for SNAP
										assistance
									</li>
								</ul>
								<div className="mt-6">
									<Link
										href="/submit"
										className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
									>
										Submit a Food Resource
									</Link>
								</div>
							</div>
						</div>

						{/* Right side: Map and filters */}
						<div className="md:col-span-1">
							<div className="bg-white rounded-lg shadow p-6 mb-6">
								<h2 className="text-xl font-semibold mb-4">Resource Map</h2>
								<div className="h-64">
									<InteractiveMap />
								</div>
							</div>

							<div className="bg-white rounded-lg shadow p-6">
								<h2 className="text-xl font-semibold mb-4">
									Food Resource Types
								</h2>
								<ul className="space-y-2">
									<li className="flex items-center">
										<span className="w-3 h-3 bg-red-500 rounded-full mr-2"></span>
										<span className="text-gray-700">Food Banks</span>
									</li>
									<li className="flex items-center">
										<span className="w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
										<span className="text-gray-700">Food Pantries</span>
									</li>
									<li className="flex items-center">
										<span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
										<span className="text-gray-700">Community Kitchens</span>
									</li>
									<li className="flex items-center">
										<span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
										<span className="text-gray-700">SNAP Assistance</span>
									</li>
								</ul>

								<h2 className="text-xl font-semibold mb-4 mt-6">
									Days Available
								</h2>
								<div className="space-y-2">
									<div className="flex items-center">
										<input type="checkbox" id="monday" className="mr-2" />
										<label htmlFor="monday" className="text-gray-700">
											Monday
										</label>
									</div>
									<div className="flex items-center">
										<input type="checkbox" id="wednesday" className="mr-2" />
										<label htmlFor="wednesday" className="text-gray-700">
											Wednesday
										</label>
									</div>
									<div className="flex items-center">
										<input type="checkbox" id="friday" className="mr-2" />
										<label htmlFor="friday" className="text-gray-700">
											Friday
										</label>
									</div>
									<div className="flex items-center">
										<input type="checkbox" id="weekend" className="mr-2" />
										<label htmlFor="weekend" className="text-gray-700">
											Weekend
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

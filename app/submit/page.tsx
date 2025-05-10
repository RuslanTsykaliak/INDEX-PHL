"use client";

import { useState } from "react";
import { T, Var } from "gt-next";

export default function SubmitPage() {
	const [formData, setFormData] = useState({
		resourceName: "",
		category: "",
		description: "",
		address: "",
		city: "Philadelphia",
		state: "PA",
		zipCode: "",
		phone: "",
		website: "",
		hours: "",
		eligibility: "",
		contactName: "",
		contactEmail: "",
		additionalInfo: "",
	});

	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitSuccess, setSubmitSuccess] = useState(false);

	const handleChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
		>,
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);

		setTimeout(() => {
			console.log("Form submitted:", formData);
			setIsSubmitting(false);
			setSubmitSuccess(true);

			setFormData({
				resourceName: "",
				category: "",
				description: "",
				address: "",
				city: "Philadelphia",
				state: "PA",
				zipCode: "",
				phone: "",
				website: "",
				hours: "",
				eligibility: "",
				contactName: "",
				contactEmail: "",
				additionalInfo: "",
			});

			setTimeout(() => {
				setSubmitSuccess(false);
			}, 5000);
		}, 1500);
	};

	return (
		<T id="submit.page.3">
			<section className="min-h-screen p-6">
				<div className="max-w-3xl mx-auto">
					<div className="mb-8 text-center">
						<h1 className="text-3xl font-bold text-blue-900 dark:text-blue-300 mb-2">
							Submit a Resource
						</h1>
						<p className="text-lg text-gray-700 dark:text-gray-300">
							Help expand our database by submitting a resource that can benefit
							the Philadelphia community.
						</p>
					</div>

					<Var>
						{submitSuccess ? (
							<T id="submit.page.0">
								<div className="bg-green-50 dark:bg-green-900 border-l-4 border-green-500 dark:border-green-600 p-4 mb-6">
									<div className="flex">
										<div className="ml-3">
											<p className="text-sm text-green-700 dark:text-green-300">
												Thank you for your submission! Our team will review the
												information and add it to our database soon.
											</p>
										</div>
									</div>
								</div>
							</T>
						) : null}
					</Var>

					<div className="bg-white dark:bg-gray-800 rounded-lg shadow dark:shadow-gray-700 p-6">
						<form onSubmit={handleSubmit}>
							<div className="mb-6">
								<h2 className="text-xl font-semibold mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
									Resource Information
								</h2>

								<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
									<div className="mb-4">
										<label
											htmlFor="resourceName"
											className="block text-gray-700 dark:text-gray-300 font-medium mb-2"
										>
											Resource Name *
										</label>
										<input
											type="text"
											id="resourceName"
											name="resourceName"
											value={formData.resourceName}
											onChange={handleChange}
											required
											className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 text-gray-900 dark:text-white bg-white dark:bg-gray-700"
										/>
									</div>

									<div className="mb-4">
										<label
											htmlFor="category"
											className="block text-gray-700 dark:text-gray-300 font-medium mb-2"
										>
											Category *
										</label>
										<select
											id="category"
											name="category"
											value={formData.category}
											onChange={handleChange}
											required
											className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 text-gray-900 dark:text-white bg-white dark:bg-gray-700"
										>
											<option value="">Select a category</option>
											<option value="housing">Housing</option>
											<option value="food">Food</option>
											<option value="health">Health</option>
											<option value="education">Education</option>
											<option value="employment">Employment</option>
											<option value="legal">Legal</option>
											<option value="transportation">Transportation</option>
											<option value="other">Other</option>
										</select>
									</div>
								</div>

								<div className="mb-4">
									<label
										htmlFor="description"
										className="block text-gray-700 dark:text-gray-300 font-medium mb-2"
									>
										Description *
									</label>
									<textarea
										id="description"
										name="description"
										value={formData.description}
										onChange={handleChange}
										required
										rows={3}
										className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 text-gray-900 dark:text-white bg-white dark:bg-gray-700"
										placeholder="Please provide a brief description of the resource..."
									></textarea>
								</div>
							</div>

							<div className="mb-6">
								<h2 className="text-xl font-semibold mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
									Contact Information
								</h2>

								<div className="mb-4">
									<label
										htmlFor="address"
										className="block text-gray-700 dark:text-gray-300 font-medium mb-2"
									>
										Street Address *
									</label>
									<input
										type="text"
										id="address"
										name="address"
										value={formData.address}
										onChange={handleChange}
										required
										className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 text-gray-900 dark:text-white bg-white dark:bg-gray-700"
									/>
								</div>

								<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
									<div className="mb-4">
										<label
											htmlFor="city"
											className="block text-gray-700 dark:text-gray-300 font-medium mb-2"
										>
											City *
										</label>
										<input
											type="text"
											id="city"
											name="city"
											value={formData.city}
											onChange={handleChange}
											required
											className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 text-gray-900 dark:text-white bg-white dark:bg-gray-700"
										/>
									</div>

									<div className="mb-4">
										<label
											htmlFor="state"
											className="block text-gray-700 dark:text-gray-300 font-medium mb-2"
										>
											State *
										</label>
										<input
											type="text"
											id="state"
											name="state"
											value={formData.state}
											onChange={handleChange}
											required
											className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 text-gray-900 dark:text-white bg-white dark:bg-gray-700"
										/>
									</div>

									<div className="mb-4">
										<label
											htmlFor="zipCode"
											className="block text-gray-700 dark:text-gray-300 font-medium mb-2"
										>
											ZIP Code *
										</label>
										<input
											type="text"
											id="zipCode"
											name="zipCode"
											value={formData.zipCode}
											onChange={handleChange}
											required
											className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 text-gray-900 dark:text-white bg-white dark:bg-gray-700"
										/>
									</div>
								</div>

								<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
									<div className="mb-4">
										<label
											htmlFor="phone"
											className="block text-gray-700 dark:text-gray-300 font-medium mb-2"
										>
											Phone Number
										</label>
										<input
											type="tel"
											id="phone"
											name="phone"
											value={formData.phone}
											onChange={handleChange}
											className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 text-gray-900 dark:text-white bg-white dark:bg-gray-700"
											placeholder="(123) 456-7890"
										/>
									</div>

									<div className="mb-4">
										<label
											htmlFor="website"
											className="block text-gray-700 dark:text-gray-300 font-medium mb-2"
										>
											Website
										</label>
										<input
											type="url"
											id="website"
											name="website"
											value={formData.website}
											onChange={handleChange}
											className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 text-gray-900 dark:text-white bg-white dark:bg-gray-700"
											placeholder="https://example.org"
										/>
									</div>
								</div>
							</div>

							<div className="mb-6">
								<h2 className="text-xl font-semibold mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
									Additional Details
								</h2>

								<div className="mb-4">
									<label
										htmlFor="hours"
										className="block text-gray-700 dark:text-gray-300 font-medium mb-2"
									>
										Hours of Operation
									</label>
									<input
										type="text"
										id="hours"
										name="hours"
										value={formData.hours}
										onChange={handleChange}
										className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 text-gray-900 dark:text-white bg-white dark:bg-gray-700"
										placeholder="e.g., Mon-Fri 9am-5pm, Sat 10am-2pm"
									/>
								</div>

								<div className="mb-4">
									<label
										htmlFor="eligibility"
										className="block text-gray-700 dark:text-gray-300 font-medium mb-2"
									>
										Eligibility Requirements
									</label>
									<textarea
										id="eligibility"
										name="eligibility"
										value={formData.eligibility}
										onChange={handleChange}
										rows={2}
										className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 text-gray-900 dark:text-white bg-white dark:bg-gray-700"
										placeholder="Who is eligible to receive this service?"
									></textarea>
								</div>

								<div className="mb-4">
									<label
										htmlFor="additionalInfo"
										className="block text-gray-700 dark:text-gray-300 font-medium mb-2"
									>
										Additional Information
									</label>
									<textarea
										id="additionalInfo"
										name="additionalInfo"
										value={formData.additionalInfo}
										onChange={handleChange}
										rows={3}
										className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 text-gray-900 dark:text-white bg-white dark:bg-gray-700"
										placeholder="Any other details that might be helpful..."
									></textarea>
								</div>
							</div>

							<div className="mb-6">
								<h2 className="text-xl font-semibold mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
									Your Contact Information
								</h2>

								<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
									<div className="mb-4">
										<label
											htmlFor="contactName"
											className="block text-gray-700 dark:text-gray-300 font-medium mb-2"
										>
											Your Name
										</label>
										<input
											type="text"
											id="contactName"
											name="contactName"
											value={formData.contactName}
											onChange={handleChange}
											className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 text-gray-900 dark:text-white bg-white dark:bg-gray-700"
										/>
									</div>

									<div className="mb-4">
										<label
											htmlFor="contactEmail"
											className="block text-gray-700 dark:text-gray-300 font-medium mb-2"
										>
											Your Email
										</label>
										<input
											type="email"
											id="contactEmail"
											name="contactEmail"
											value={formData.contactEmail}
											onChange={handleChange}
											className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 text-gray-900 dark:text-white bg-white dark:bg-gray-700"
										/>
									</div>
								</div>
							</div>

							<div className="flex justify-end">
								<button
									type="submit"
									disabled={isSubmitting}
									className={`px-6 py-2 rounded-md text-white font-medium ${isSubmitting ? "bg-blue-400 dark:bg-blue-600" : "bg-blue-600 hover:bg-blue-700 dark:bg-blue-800 dark:hover:bg-blue-700"} transition-colors duration-200`}
								>
									<Var>
										{isSubmitting ? (
											<T id="submit.page.1">{"Submitting..."}</T>
										) : (
											<T id="submit.page.2">{"Submit Resource"}</T>
										)}
									</Var>
								</button>
							</div>
						</form>
					</div>

					<div className="mt-8 text-center text-gray-600 dark:text-gray-400">
						<p>
							Thank you for contributing to our community resources directory.
							Your submission will be reviewed within 5-7 business days.
						</p>
					</div>
				</div>
			</section>
		</T>
	);
}
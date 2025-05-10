"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import searchData from "@/data/search.json";
import { Var, T } from "gt-next";

interface Resource {
	id: string;
	name: string;
	description: string;
}

export default function AIpoweredSearch() {
	const [query, setQuery] = useState<string>("");
	const [suggestions, setSuggestions] = useState<Resource[]>([]);
	const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
	const router = useRouter();
	const searchContainerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				searchContainerRef.current &&
				!searchContainerRef.current.contains(event.target as Node)
			) {
				setShowSuggestions(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	const handleSearch = () => {
		if (query.trim()) {
			router.push(`/results?query=${encodeURIComponent(query.trim())}`);
			setShowSuggestions(false);
		}
	};

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const inputValue = e.target.value;
		setQuery(inputValue);

		if (inputValue.trim()) {
			const lowerCaseQuery = inputValue.toLowerCase();
			const filteredSuggestions = searchData
				.filter(
					(resource) =>
						resource.name.toLowerCase().includes(lowerCaseQuery) ||
						resource.description.toLowerCase().includes(lowerCaseQuery),
				)
				.slice(0, 5);

			setSuggestions(filteredSuggestions);
			setShowSuggestions(true);
		} else {
			setSuggestions([]);
			setShowSuggestions(false);
		}
	};

	const handleSuggestionClick = (suggestion: Resource) => {
		setQuery(suggestion.name);
		setSuggestions([]);
		setShowSuggestions(false);
		router.push(`/results?query=${encodeURIComponent(suggestion.name)}`);
	};

	const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter") {
			handleSearch();
		}
	};

	return (
		<T id="components.aipoweredsearch.0">
			<div
				className="w-full max-w-2xl mx-auto relative"
				ref={searchContainerRef}
			>
				<div className="flex flex-col sm:flex-row items-center">
					<input
						type="text"
						placeholder="Search for resources..."
						value={query}
						onChange={handleInputChange}
						onKeyPress={handleKeyPress}
						onFocus={() => {
							if (query.trim()) setShowSuggestions(true);
						}}
						className="flex-1 px-4 py-3 rounded-l-lg border border-gray-300 dark:border-gray-600 shadow dark:shadow-gray-700 text-black dark:text-white font-bold focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 w-full sm:w-auto z-10 bg-white dark:bg-gray-700"
					/>
					<button
						onClick={handleSearch}
						className="px-4 py-3 rounded-r-lg bg-[#1c398e] dark:bg-blue-800 text-white dark:text-white font-medium hover:bg-[#162f6c] dark:hover:bg-blue-700 transition-colors flex-shrink-0 mt-2 sm:mt-0 sm:ml-[-1px] shadow dark:shadow-gray-700 z-10"
					>
						Search
					</button>
				</div>
				<Var>
					{showSuggestions && suggestions.length > 0 && (
						<ul className="absolute top-full left-0 right-0 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-lg dark:shadow-xl mt-1 z-20 max-h-60 overflow-y-auto">
							{suggestions.map((suggestion) => (
								<li
									key={suggestion.id}
									onClick={() => handleSuggestionClick(suggestion)}
									className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer text-gray-800 dark:text-gray-200"
								>
									<h3 className="font-semibold text-sm text-gray-900 dark:text-gray-100">{suggestion.name}</h3>
									<p className="text-xs text-gray-600 dark:text-gray-400 truncate">
										{suggestion.description}
									</p>
								</li>
							))}
						</ul>
					)}
				</Var>
			</div>
		</T>
	);
}
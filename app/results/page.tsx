"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import searchData from "@/data/search.json";
import { Var, T } from "gt-next";

interface Resource {
  id: string;
  name: string;
  description: string;
}

export default function ResultsPage() {
  const [searchResults, setSearchResults] = useState<Resource[]>([]);

  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";

  useEffect(() => {
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    const lowerCaseQuery = query.toLowerCase();
    const filteredResults = searchData.filter(
      (resource) =>
        resource.name.toLowerCase().includes(lowerCaseQuery) ||
        resource.description.toLowerCase().includes(lowerCaseQuery),
    );

    setSearchResults(filteredResults);
  }, [query]);

  return (
    <T id="results.page.3">
      <section className="min-h-screen p-6 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-900 dark:text-blue-300 mb-4">
            Search Results
            <Var>
              {query && (
                <T id="results.page.0">
                  <span className="text-gray-600 dark:text-gray-400">
                    {" "}
                    for &quot;<Var>{query}</Var>&quot;
                  </span>
                </T>
              )}
            </Var>
          </h1>

          <div>
            <Var>
              {query.trim() === "" ? (
                <T id="results.page.1">
                  <p className="text-gray-700 dark:text-gray-300">Please enter a search query.</p>
                </T>
              ) : searchResults.length > 0 ? (
                <ul className="mt-4 space-y-4">
                  {searchResults.map((resource) => (
                    <li
                      key={resource.id}
                      className="p-4 bg-gray-100 dark:bg-gray-800 rounded shadow dark:shadow-gray-700"
                    >
                      <h3 className="text-xl font-bold text-blue-800 dark:text-blue-300">
                        {resource.name}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">{resource.description}</p>
                    </li>
                  ))}
                </ul>
              ) : (
                <T id="results.page.2">
                  <p className="text-gray-700 dark:text-gray-300">
                    No resources found for &quot;<Var>{query}</Var>&quot;.
                  </p>
                </T>
              )}
            </Var>
          </div>
        </div>
      </section>
    </T>
  );
}
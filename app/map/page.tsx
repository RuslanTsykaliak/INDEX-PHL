"use client";

import { useEffect } from "react";
import dynamic from "next/dynamic";
import { T } from "gt-next";

const InteractiveMap = dynamic(() => import("@/components/InteractiveMap"), {
	ssr: false,
	loading: () => (
		<T id="map.page.0">
			<div className="flex justify-center items-center h-full p-6 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg">
				<p>Loading map...</p>
			</div>
		</T>
	),
});

export default function MapPage() {
	useEffect(() => {
		const enterFullScreen = () => {
			const elem = document.documentElement;
			if (elem.requestFullscreen) {
				elem.requestFullscreen();
			} else if ("webkitRequestFullscreen" in elem) {
				(
					elem as HTMLElement & { webkitRequestFullscreen: () => void }
				).webkitRequestFullscreen();
			} else if ("msRequestFullscreen" in elem) {
				(
					elem as HTMLElement & { msRequestFullscreen: () => void }
				).msRequestFullscreen();
			}
		};

		enterFullScreen();
	}, []);

	return (
		<div className="flex flex-col h-screen">
			<div className="flex-grow">
				<InteractiveMap />
			</div>
		</div>
	);
}
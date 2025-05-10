"use client";

import { useEffect } from "react"; // Keep useState, useEffect might not be needed
import { MapContainer, TileLayer } from "react-leaflet"; // Remove Marker, Popup
import L from "leaflet";

import "leaflet/dist/leaflet.css";

export default function InteractiveMap() {
	// Removed the position state hook

	useEffect(() => {
		// Keep the Leaflet marker icon fix if needed for any other markers you might add
		delete (L.Icon.Default.prototype as unknown as { _getIconUrl?: () => void })
			._getIconUrl;
		L.Icon.Default.mergeOptions({
			iconRetinaUrl:
				"https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
			iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
			shadowUrl:
				"https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
		});
		// Removed the fetch useEffect and interval
	}, []); // Empty dependency array means it runs once on mount

	const defaultCenter = { lat: 39.9526, lng: -75.1652 }; // Default Philly center

	return (
		<MapContainer
			center={defaultCenter} // Always use the default center
			zoom={13}
			scrollWheelZoom={true}
			className="w-full h-full rounded-lg shadow-md"
			style={{ height: "500px", width: "100%" }} // Ensure map container has dimensions
		>
			<TileLayer
				attribution="&copy; OpenStreetMap contributors"
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>

			{/* Removed the Marker and Popup based on the fetched position */}
			{/* Add other Markers here later if you want to display static resource locations */}

		</MapContainer>
	);
}
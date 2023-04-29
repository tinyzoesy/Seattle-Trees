import React, { useRef, useEffect, useState } from 'react';
import Filters from './Filters';
import {layers} from "./Labels";
import Popup from "./Popup";

import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = 'pk.eyJ1IjoidmVyYXpvdSIsImEiOiJjbGdhMDkyZHMwOThiM2RwZ256bWR0dm9hIn0.f-631-O5UNmKOOF1svxxzQ';
// mapboxgl.accessToken = 'sk.eyJ1IjoidmVyYXpvdSIsImEiOiJjbGdhYzlrdzAwZmt3M3JxaTduc2ZwZjVxIn0.-AFSvCZuoSl1s5_HgZhWhA';


export default function App() {
	const mapContainer = useRef(null);
	const map = useRef(null);
	const [lng, setLng] = useState(-122.33);
	const [lat, setLat] = useState(47.61);
	const [zoom, setZoom] = useState(10);
	const [selectedTree, setSelectedTree] = useState(null);

	// Initialize
	useEffect(() => {
	    if (!map.current) {
		    map.current = new mapboxgl.Map({
				container: mapContainer.current,
				style: 'mapbox://styles/verazou/clh1ho71h007301q11ylf0rfr',
				center: [lng, lat],
				zoom: zoom,
				maxBounds: [[-124.763068, 45.543541],[-116.915989, 48.946000]],
				minZoom: 9,
		    });
		    map.current.addControl(
				new mapboxgl.GeolocateControl({
					positionOptions: {
					enableHighAccuracy: true
					},
					// When active the map will receive updates to the device's location as it changes.
					trackUserLocation: true,
					// Draw an arrow next to the location dot to indicate which direction the device is heading.
					showUserHeading: true
				})
			);
		}

	    // map.current.on('load', () => {
	    //     map.current.addSource('flower-source', {
		//       type: 'vector',
		//       url: 'mapbox://verazou.seattleflowerswithicons', 
		//       cluster: true,
		//       clusterMaxZoom: 14,
		//       clusterRadius: 100
		//     });

		//     map.current.addLayer({
		//       id: 'clusters',
		//       type: 'circle',
		//       source: 'flower-source',
		//       'source-layer': 'flowers',
		//       filter: ['has', 'point_count'],
		//       paint: {
		//         'circle-color': '#51bbd6',
		//         'circle-radius': 2,
		//         'circle-translate': [-15, -15],
		//       },
	    // 	});
	    // });

	  });

	// Store new coordinates
	useEffect(() => {
		if (!map.current) return; // wait for map to initialize
		map.current.on('move', () => {
			setLng(map.current.getCenter().lng.toFixed(4));
			setLat(map.current.getCenter().lat.toFixed(4));
			setZoom(map.current.getZoom().toFixed(2));
		});


		map.current.on('click', 'trees', (e) => {
			// // Copy coordinates array.
			// const coordinates = e.features[0].geometry.coordinates.slice();
			// const description = e.features[0].properties.COMMON_NAME;
			 
			// // Ensure that if the map is zoomed out such that multiple
			// // copies of the feature are visible, the popup appears
			// // over the copy being pointed to.
			// while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
			// coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
			// }
			 
			// new mapboxgl.Popup()
			// .setLngLat(coordinates)
			// .setHTML(description)
			// .addTo(map.current);
			// console.log(e.features[0]);
			setSelectedTree(e);
		});
	});

	// useEffect(() => {
    // 	map.current.on('idle', () => {
	//     	console.log("idle");
	// 		if (!map.current) return; // wait for map to initialize
	// 	    for (let layer of layers) {
	// 			if (layer.id !== selectedFlower) {
	// 	    		map.current.setLayoutProperty(layer.id, 'visibility', 'none');
	// 	    	} else {
	// 	    		map.current.setLayoutProperty(layer.id, 'visibility', 'visible');
	//     		}
	//     	}
	//     });
	// }, [selectedFlower]);

	const info = <div className="sidebar">
				Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
			</div>;

	return (
		<div>
			<div ref={mapContainer} className="map-container" />
			{selectedTree !== null && <Popup map={map.current} tree={selectedTree}/>}
		</div>
	);
}


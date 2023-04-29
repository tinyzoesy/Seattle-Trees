import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { IconButton } from '@mui/material';
import React, { useRef, useEffect, useState } from 'react';



export default function Popup({ map, tree }) {

	console.log(tree);
	const [visible, setVisible] = useState(tree !== null);
	console.log("visible", visible);
	useEffect(() => {
		setVisible(true);
	},[tree]);

	const onClickClose = (event, id) => {
		setVisible(false);
	};

	const features = tree.features
	if (features === null || features === undefined || tree.features.size === 0) return null
	const properties = tree.features[0].properties

	const plantedDataString = properties.PLANTED_DATE
	const date = new Date(plantedDataString);
	const isoString = date.toISOString();
	const formattedDate = plantedDataString.substring(0, 10);
	console.log(formattedDate); // Output: "2009-09-09
	const address = properties.UNITDESC
	const formattedAddress = address.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')

	return (visible && <div className="filter-wrapper" ><div className="filter-container">
				<div className="close-button"><IconButton color="#6f924b" aria-label="close" component="label" size="small" onClick={onClickClose}>
					<CloseRoundedIcon fontSize="inherit" sx={{ color: '#6f924b' }}/>
				</IconButton></div>
				<div  className="filter-body">
					<div className="filter-title">{properties.COMMON_NAME}</div>
					<div><div className="scientific-name-title">Scientific name: </div><div className="scientific-name">{properties.SCIENTIFIC_NAME}</div></div>
					<div><div className="scientific-name-title">Planted date: </div><div className="scientific-name">{formattedDate}</div></div>
					<div><div className="scientific-name-title">Address: </div><div className="scientific-name">{formattedAddress}</div></div>
				</div>

			</div></div>);

}
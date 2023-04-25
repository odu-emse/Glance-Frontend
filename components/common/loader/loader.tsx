import React from 'react';
import Loader from '@/components/util/loader';

function Loading() {
	return (
		<div className="flex justify-center items-center stdcontainer h-screen">
			<Loader textColor="royalblue" />
		</div>
	)
}

export default Loading;
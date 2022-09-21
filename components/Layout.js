import React from 'react';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {

	return (
		<main className="flex gap-x-1">
			<Sidebar />
			{/* Main content */}
			<section className="w-full">{children}</section>
		</main>
	);
};

export default Layout;

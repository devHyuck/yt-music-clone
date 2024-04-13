import Header from '@/components/elements/Header';
import React from 'react';

const layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className='w-full h-full'>
			<Header>{children}</Header>
		</div>
	);
};

export default layout;

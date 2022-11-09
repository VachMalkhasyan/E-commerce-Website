import React from 'react';
import nkar from '../images/tree-736885_960_720.jpg'
const Home = () => {
return (
	<div style={{backgroundImage:`url(${nkar})`}}>
			<div
				style={{
					display: 'flex',
					justifyContent: 'Right',
					alignItems: 'Right',
					height: '100vh'
				}}
				>
				<h1>home page</h1>
			</div>
	</div>
);
};

export default Home;

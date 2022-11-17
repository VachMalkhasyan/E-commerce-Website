import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
return (
	<>
	<Nav>
		<Bars />

			<NavMenu>
				<NavLink to='All_Products' activestyle="true">
				 All_Products
				</NavLink>
				<NavLink to='/Hot products' activestyle="true">
					Hot Products
				</NavLink>
				<NavLink to='/sales' activestyle="true">
					Sales
				</NavLink>
				<NavLink to='/team' activestyle="true">
					Teams
				</NavLink>
				<NavLink to='/blogs' activestyle="true">
					Blogs
				</NavLink>
				<NavLink to='/support' activestyle="true">
					Support
				</NavLink>
			{/* Second Nav */}	
			{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
			</NavMenu>
		<NavBtn>
				<NavBtnLink to='/signin'>Sign In</NavBtnLink>
		</NavBtn>
	</Nav>
	</>
);
};

export default Navbar;

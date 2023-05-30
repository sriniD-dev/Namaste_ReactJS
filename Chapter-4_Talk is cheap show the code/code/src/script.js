import React from 'react';
import ReactDOM from 'react-dom/client';
// import logo from 'foodlogo.jpg';
import logo from '/assets/logo-home.jpg';
import './header.css';

const Header = () => (
	<div id="header">
		{/* <h1 id="heading"></h1> */}
		<div className="logo-container">
			<img src={logo} className="logo" alt="logo" />
		</div>
		<div className="nav-items">
			<ul className="nav-links">
				<li>Home</li>
				<li>About</li>
				<li>My Account</li>
				<li>Contact Us</li>
				<li>Cart</li>
			</ul>
		</div>
	</div>
);

const AppLayout = () => (
	<div id="app_layout">
		<Header />
	</div>
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);

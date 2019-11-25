import React from "react";
import { Link } from "react-router-dom";

//import styles
import "./Footer.scss";

export class Footer extends React.Component {
	render() {
		return (
			<div className="footer">
				<nav className="bottomNav">
					<Link to="/" >Home</Link>
					<Link to="/FAQ" >FAQ</Link>
					<Link to="/Promotions" >Promotions</Link>
					<Link to="/Contact">Contact</Link>	
				</nav>	
				<div className="social">
					<a href="https://facebook.com"><i className="fab fa-facebook"></i></a>
					<a href="https://twitter.com/"><i className="fab fa-twitter"></i></a>
					<a href="https://www.linkedin.com"><i className="fab fa-linkedin"></i></a>
					<a href="https://www.instagram.com"> <i className="fab fa-instagram"></i></a >
					<a href="https://pl.pinterest.com"> <i className="fab fa-pinterest"></i></a >
				</div>
			</div>
		);
	};
}
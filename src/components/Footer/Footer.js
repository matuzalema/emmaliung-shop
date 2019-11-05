import React from "react";
import { Link } from "react-router-dom";

//import styles
import "./Footer.scss";

export class Footer extends React.Component {
	render() {
		return (
			<div className="footer">
				<nav className="bottomNav">
					<Link exact to="/" activeClassName="active">Home</Link>
					<Link exact to="/FAQ" activeClassName="active">FAQ</Link>
					<Link exact to="/Promotions" activeClassName="active">Promotions</Link>
					<Link exact to="/Contact" activeClassName="active">Contact</Link>	
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
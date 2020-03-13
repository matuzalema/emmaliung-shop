import React from 'react';
import {Jumbotron} from 'react-bootstrap';

//import styles
import MyGallery from "../Carousel/Carousel";

// import styles
import "./Promotions.scss";

export class Promotions extends React.Component {
	render(){
		return <div className="promotions">	
			<p className="promotions-top">Kolejne obniżki</p>
			<h1 className="promotions-header">Wyprzedaż, teraz nawet <br /> <span className="promotions-span">30% taniej </span> <br />Obserwuj przeceny!</h1>
			<p className="promotion-desc">Oferta dotyczy wybranych modeli</p>
		</div>
	}
}
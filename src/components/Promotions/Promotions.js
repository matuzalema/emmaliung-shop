import React from 'react';
import {Jumbotron} from 'react-bootstrap';

//import styles
import MyCarousel from "../Carousel/Carousel";

// import styles
import "./Promotions.scss";

export class Promotions extends React.Component {
	render(){
		return <div className="promotions">	
			<Jumbotron>
				<img src="../../images/dron-promotion.jpg" alt=""/>
				<p className="promotions-top">Kolejne obniżki</p>
				<h1 className="promotions-header">Wyprzedaż, teraz nawet <br /> <span className="promotions-span">30% taniej </span> <br />Aparat CANON EOS 4000D już od 700 PLN !!!</h1>
				<p className="promotion-desc">Oferta dotyczy wybranych produktów w sklepach stacjonarnych i obowiązuje do wyczerpania zapasów. Ceny w sklepie stacjonarnym oraz internetowym mogą się różnić.</p>
			</Jumbotron>
			<div className="promotion-carousel">
				<MyCarousel />
			</div>
		</div>
	}
}
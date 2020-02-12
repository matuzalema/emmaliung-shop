import React from 'react';
import {Jumbotron} from 'react-bootstrap';

//import styles
import MyGallery from "../Carousel/Carousel";

// import styles
import "./Promotions.scss";

export class Promotions extends React.Component {
	render(){
		return <div className="promotions">	
				<img src="../../images/dron-promotion.jpg" alt=""/>
				<h1 className="promotions-header">Promocja dnia!!! <br /> <span className="promotions-span">30% taniej </span> <br />na wózek Emmaliunga 20129</h1>
				<p className="promotion-desc">Każdego dnia promocja na jeden z modeli wózka! <br /> Warto więc regularnie odwiedzać naszą stronę</p>
		</div>
	}
}
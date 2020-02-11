import React from "react";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import {addToCart} from "../../../actions/cartActions";
import MyGallery from "../../Carousel/Carousel";
import SelectNavigation from "../../SelectNavigation/SelectNavigation";
import ImageGallery from 'react-image-gallery';

//import styles
import "./Product.scss";

class Product extends React.Component {
   
    render(){
        return (
            <>
                <SelectNavigation />
                <div className="product-wrapper">
                    <div className="product-wrapper-letf">
                        <button type="button" className="desc-btn">Zobacz opis</button>
                        <button type="button" className="desc-btn">Zadzwoń lub napisz do mnie</button>
                        <button type="button" className="desc-btn">Zapytaj na czacie</button>
                        <h1 className="desc-price">Cena {this.props.products[this.props.match.params.id].price} zł</h1>
                        <button type="button" className="button desc-btn-card button-primary">Dodaj do koszyka</button>
                    </div>
                    <div className="product-wrapper-right">
                        {/* <h1 className="product-names">{this.props.products[this.props.match.params.id].name}</h1> */}
                        <div className='gallery-wrapper'>
                            <MyGallery params={this.props.products[this.props.match.params.id].images}/>
                        </div>
                        <p className="product-description">{this.props.products[this.props.match.params.id].detail}</p>
                        <Link to="/home" className="button btn-back"> Wróć </Link>
                    </div>
                </div>
            </>
        )
    }
}

const mapStateToProps = state => ({
    products: state.products
})

const mapDispatchToProps = {
    addToCart,
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);
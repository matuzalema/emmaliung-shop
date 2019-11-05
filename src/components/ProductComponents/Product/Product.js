import React from "react";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import {addToCart} from "../../../actions/cartActions";

//import styles
import "./Product.scss";

class Product extends React.Component {
   
    render(){
        return (
            <div className="product-wrapper">
                <div className="product-wrapper-letf">
                    <img 
                        src={this.props.products[this.props.match.params.id].img} 
                        alt={this.props.products[this.props.match.params.id].name} />
                </div>
                <div className="product-wrapper-right">
                    <p className="product-inf">{this.props.products[this.props.match.params.id].inf}</p>
                    <h1 className="product-names">{this.props.products[this.props.match.params.id].name}</h1>
                    <p className="product-price">{this.props.products[this.props.match.params.id].price} PLN</p>
                    <p className="product-description">{this.props.products[this.props.match.params.id].detail}</p>
                    <button type="submit" className="button button-primary" onClick={() => this.props.addToCart(this.props.products[this.props.match.params.id])}> dodaj do koszyka </button>
                    <Link to="/home" className="button"> Wróć </Link>
                </div>
            </div>
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
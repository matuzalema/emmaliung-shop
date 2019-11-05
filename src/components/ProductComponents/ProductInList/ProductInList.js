import React from "react";
import {Link} from 'react-router-dom';
import { addToCart } from "../../../actions/cartActions";
import { connect } from 'react-redux';

//import styles
import "./ProductInList.scss";


class ProductInList extends React.Component {
    render() {
        return (
            <div>
                <div className="product" key={this.props.product.id}>
                    <h1 className="productInf">{this.props.product.inf} </h1>
                    <Link to={"/product/" + this.props.product.id}>
                        <img className="productImg" src={this.props.product.img} alt={this.props.product.name} />
                    </Link>
                    <h2 className="productName">{this.props.product.name}</h2>
                    <h2 className="productPrice">{this.props.product.price} PLN</h2>
                    <button type="submit" className="button button-product-list button-primary" onClick={() => this.props.addToCart(this.props.product)}> dodaj do koszyka </button>
                    <Link
                        to={"/product/" + this.props.product.id} >
                        <button type="submit" className="button button-more" >więcej &nbsp;>></button>
                    </Link>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = {
    addToCart,
}

export default connect(null, mapDispatchToProps)(ProductInList);
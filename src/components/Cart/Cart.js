import React from "react";
import { connect } from "react-redux";
import { addQuantity, substractQuantity, removeCartProduct, enablePromotion} from "../../actions/cartActions";
import { Link } from 'react-router-dom';

//import styles
import "./Cart.scss";

//import components
import CartProductsList from "./CartProductsList";

class Cart extends React.Component {
    render() {
        return (
            <div className="cart">
                <h1 className="cart-header">Twój koszyk</h1>
                <CartProductsList 
                    key={this.props.id}
                    cartContent={this.props.cartContent}
                    addQuantity={this.props.addQuantity.bind(this)}
                    substractQuantity={this.props.substractQuantity.bind(this)}
                    // enablePromotion={this.props.enablePromotion.bind(this)}
                    removeCartProduct={this.props.removeCartProduct.bind(this)}/>
                <form className="payForm" onSubmit={e => e.preventDefault()}>
                    <input placeholder="kod rabatowy" className="discount" type="text" name="input" />
                    <p className="inf-promotion">* wpisz kod <b>foto</b> by otrzymać <br /> 10% zniżki na wszystkie produkty</p>
                    <button className="button button-promotion" onClick={() => this.props.enablePromotion("foto")}>Aktywuj kod</button>
                    <h2 className="sum">Do zapłaty: {this.props.overallPrice} PLN</h2>
                    <Link to="/order">
                        <button type="submit" className="button button-primary button-pay">Zamów</button>
                    </Link>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    cartContent: state.cartContent.cartContent,
    overallPrice: state.cartContent.overallPrice,
});

const mapDispatchToProps =  {
    addQuantity, 
    substractQuantity,
    enablePromotion,
    removeCartProduct,
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
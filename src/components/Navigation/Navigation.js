import React from "react";
import {NavLink} from "react-router-dom";
import { connect } from "react-redux";

//import styles
import "./Navigation.scss";

class Navigation extends React.Component {

  render() {
    return (
    <div className="top">
      <nav className="topNav">
        <NavLink exact to="/" activeClassName="active">Home</NavLink>
        <NavLink exact to="/Emmaliunga" activeClassName="active">Emmaliunga</NavLink>
        <NavLink exact to="/Tips" activeClassName="active">Porady</NavLink>


        {/* <NavLink exact to="/FAQ" activeClassName="active">FAQ</NavLink> */}
        <NavLink exact to="/Promotions" activeClassName="active">Promocje</NavLink>
        <NavLink exact to="/Contact" activeClassName="active">Kontakt</NavLink>
        {/*<div className="cart-wrapper">
        <NavLink exact to="/Cart" activeClassName="active"><i className="material-icons cart-icon">shopping_cart</i>
              <p className="cart-quantity">{this.props.cartProductsQuantity}</p></NavLink>
        </div>
    */}
      </nav>
    </div>
    );
  }
}

const mapStateToProps = state => ({
  cartProductsQuantity: state.cartContent.cartProductsQuantity
});

export default connect(mapStateToProps)(Navigation);
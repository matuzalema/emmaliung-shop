import React from "react";
import { Link } from "react-router-dom";

//import styles
import "./Layout.scss";

//import components
import Header  from "../Header/Header.js";
import { Footer } from "../Footer/Footer";

class Layout extends React.Component {

  render() {
    return (
      <div className="container-fluid">
        <div className='top-nav'>
          <p className="top-nav-item">
            <Link to={"/log"} >
              <i className="material-icons top-nav-icon">perm_identity</i>
              Zaloguj się
            </Link>
          </p>
          <p className="top-nav-item">
            <Link to={"/newsletter"}>
            <i className="material-icons top-nav-icon"> mail_outline </i>
              Newsletter
            </Link>
          </p>
          <p className="top-nav-item">
            <Link to={"/feedback"}>
            <i className="material-icons top-nav-icon">contact_mail</i>
              Feedback 
            </Link>
          </p>
        </div>
        <Header cartProductsQuantity={this.props.cartProductsQuantity}/>
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default Layout;
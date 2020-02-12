import React from "react";
import { connect } from "react-redux";
import cloneDeep from 'lodash/cloneDeep';
import { Link } from "react-router-dom";
// import Pagination from "react-reactstrap-pagination";

//import styles
import "./Layout.scss";

//import components
import Header  from "../Header/Header.js";
import { ProductsList } from "../ProductComponents/ProductList/ProductsList";
import Navigation from "../Navigation/Navigation.js";
import SelectNavigation from "../SelectNavigation/SelectNavigation.js";

import { Footer } from "../Footer/Footer";

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.pageSize = 6;
    this.state = {
      selectedPage: 1,
      sortedProducts: cloneDeep(props.products),
      productsToDisplay: cloneDeep(props.products).slice(0, this.pageSize),
      direction: "asc",
      lastSortKey: ""
    };
    this.handlePaginationSelected = this.handlePaginationSelected.bind(this);
  }

  filterByCategory(category) {
    let productsAfterFilter;
    if (category === 'all') {
      productsAfterFilter = this.props.products;
    } else {
      productsAfterFilter = this.props.products.filter(product => product.category === category)
    }
    this.setState({
      sortedProducts: cloneDeep(productsAfterFilter),
      selectedPage: 1,
      productsToDisplay: productsAfterFilter.slice((this.pageSize) - this.pageSize, (this.pageSize))
    });
  }

  filterByProductGroup(productGroup) {
    let productsAfterFilterByProductGroup;
    productsAfterFilterByProductGroup = this.props.products.filter(product => product.productGroup === productGroup);
    this.setState({
      sortedProducts: cloneDeep(productsAfterFilterByProductGroup),
      selectedPage: 1,
      productsToDisplay: productsAfterFilterByProductGroup.slice((this.pageSize) - this.pageSize, (this.pageSize))
    });
  }

  sortByKey(key) {
    let direction;
    if (key === this.state.lastSortKey) {
      direction = this.state.direction === "asc" ? "desc" : "asc"
    } else {
      direction = "asc"
    }
    let productsSorted = this.state.sortedProducts.sort((a, b) => {
      if (isNaN(a[key])) {
        if (direction === "asc") {
          return (a[key]).localeCompare(b[key])
        } else {
          return (b[key]).localeCompare(a[key])
        }
      } else {
        if (direction === "asc") {
          return parseFloat(a[key]) - parseFloat(b[key])
        } else {
          return parseFloat(b[key]) - parseFloat(a[key])
        }
      }
    })
    this.setState({
      sortedProducts: productsSorted,
      direction: direction,
      lastSortKey: key,
      selectedPage: 1,
      productsToDisplay: productsSorted.slice((this.pageSize) - this.pageSize, (this.pageSize))
    })
  }

  handlePaginationSelected(selectedPage) {
    this.setState({
      selectedPage: selectedPage,
      productsToDisplay: this.state.sortedProducts.slice((selectedPage * this.pageSize) - this.pageSize, (selectedPage * this.pageSize))
    })
  }

  toggleVisibleElement(e) {

    const leftNavBtn = document.querySelectorAll('.left-nav-btn');
    leftNavBtn.forEach(element => {
      element.addEventListener('click', (event) => {
        event.stopPropagation();
        // event.preventDefault();
        element.nextSibling.classList.toggle('hide');
      })
    });
  }

  render() {
    return (
      <div className="container-fluid">
        {/* <Header cartProductsQuantity={this.props.cartProductsQuantity} /> */}
        <div className='top-nav'>
          <Navigation />
          <header className="header">
            <img className="logo" src='../../images/logoText.png' alt=""/>
            <img className="header-text" src='../../images/EmmaliungaHeader.png' alt="" />

          </header>
          <div className='select-category'>
            <button className="category-btn" onClick={() => this.filterByCategory("wozki")}>Wózki</button>
            <button className="category-btn" onClick={() => this.filterByCategory("foteliki")}>Foteliki</button>
            <button className="category-btn" onClick={() => this.filterByCategory("akcesoria")}>Akcesoria</button>
            <button className="category-btn" onClick={() => this.filterByCategory("all")}>Wszystkie</button>
          </div>

          <div className="homeContainer">
            <div className="wrapperHomeLeft">
              <ul>
                <li><button className='left-nav-btn' typle="button" onClick={(e) => this.toggleVisibleElement(e)}>Wózki</button>
                  <ul className="left-nav-btn-nested">
                    <li onClick={() => this.filterByProductGroup("wozekMondial")}><button className="left-nav-btn-nested">Mondial</button></li>
                    <li onClick={() => this.filterByProductGroup("wozekEdge")}><button className="left-nav-btn-nested">Edge</button></li>
                    <li onClick={() => this.filterByProductGroup("wozekNXT")}><button className="left-nav-btn-nested">NXT</button></li>
                    <li onClick={() => this.filterByProductGroup("wozekViking")}><button className="left-nav-btn-nested">Viking</button></li>
                  </ul>
                </li>
                <li><button className='left-nav-btn' typle="button" onClick={(e) => this.toggleVisibleElement(e)}>Spacerówki</button>
                  <ul className="left-nav-btn-nested hide">
                    <li onClick={() => this.filterByProductGroup("SpacerowkaMondial")}><button className="left-nav-btn-nested">Mondial</button></li>
                    <li onClick={() => this.filterByProductGroup("Edge")}><button className="left-nav-btn-nested">Edge</button></li>
                    <li onClick={() => this.filterByProductGroup("NXT")}><button className="left-nav-btn-nested">NXT</button></li>
                  </ul>
                </li>
                <li><button className='left-nav-btn' typle="button" onClick={(e) => this.toggleVisibleElement(e)}>Foteliki</button>
                  <ul className="left-nav-btn-nested hide">
                    <li onClick={() => this.filterByProductGroup("Lionelo")}><button className="left-nav-btn-nested">Lionelo</button></li>
                    <li onClick={() => this.filterByProductGroup("Graco")}><button className="left-nav-btn-nested">Graco</button></li>
                    <li onClick={() => this.filterByProductGroup("Maxi-Cosi")}><button className="left-nav-btn-nested">Maxi-Cosi</button></li>
                  </ul>
                </li>
              </ul>
              <button className="button-sort" onClick={() => this.sortByKey("name")}>Sortuj wg nazwy</button>
              <button className="button-sort" onClick={() => this.sortByKey("price")}>Sortuj wg ceny</button>
            </div>
            <div class="children-container">
            {this.props.children}
            </div>

            {/* <ProductsList products={this.state.productsToDisplay} /> */}
          </div>
          {/* <div className="container-fluid"> */}
            {/* <Pagination className="pagination-bottom"
              totalItems={this.state.sortedProducts.length}
              pageSize={this.pageSize}
              onSelect={this.handlePaginationSelected}
              activePage={this.state.selectedPage}
            /> */}
          {/* </div> */}
          {/* <div className="carousel">
          </div>   */}
          
          {/* <SelectNavigation /> */}
          {/* <p className="top-nav-item">
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
          </p> */}
        </div>
        
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products
});

export default connect(mapStateToProps)(Layout);
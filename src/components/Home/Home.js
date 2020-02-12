import React from "react";
import { connect } from "react-redux";
import cloneDeep from 'lodash/cloneDeep';
import Pagination from "react-reactstrap-pagination";

//import styles
import "./Home.scss";
import "../Pagination/Pagination.scss"

//import components
import {ProductsList} from "../ProductComponents/ProductList/ProductsList";
import SelectNavigation from "../SelectNavigation/SelectNavigation";

class Home extends React.Component {
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
    // this.handlePaginationSelected = this.handlePaginationSelected.bind(this);
  }

  // filterByCategory(category) {
  //   let productsAfterFilter;
  //   if(category==='all'){
  //     productsAfterFilter = this.props.products;
  //   } else {
  //     productsAfterFilter = this.props.products.filter(product => product.category === category)
  //   }
  //   this.setState({
  //     sortedProducts: cloneDeep(productsAfterFilter),
  //     selectedPage: 1,
  //     productsToDisplay: productsAfterFilter.slice((this.pageSize) - this.pageSize, (this.pageSize))
  //   }); 
  // }

  // filterByProductGroup(productGroup) {
  //   let productsAfterFilterByProductGroup;
  //   productsAfterFilterByProductGroup = this.props.products.filter(product => product.productGroup === productGroup);
  //   this.setState({
  //     sortedProducts: cloneDeep(productsAfterFilterByProductGroup),
  //     selectedPage: 1,
  //     productsToDisplay: productsAfterFilterByProductGroup.slice((this.pageSize) - this.pageSize, (this.pageSize))
  //   });
  // }

  // sortByKey(key) {
  //   let direction;
  //   if (key === this.state.lastSortKey){
  //     direction = this.state.direction === "asc" ? "desc" : "asc"
  //   } else {
  //     direction = "asc"
  //   }
  //   let productsSorted = this.state.sortedProducts.sort((a, b) => {
  //     if(isNaN(a[key])){
  //       if (direction === "asc") {
  //         return (a[key]).localeCompare(b[key])
  //       } else {
  //         return (b[key]).localeCompare(a[key])
  //       }
  //     } else {
  //       if (direction === "asc") {
  //         return parseFloat(a[key]) - parseFloat(b[key])
  //       } else {
  //         return parseFloat(b[key]) - parseFloat(a[key])
  //       }
  //     }
  //   })
  //   this.setState({
  //     sortedProducts: productsSorted,
  //     direction: direction,
  //     lastSortKey: key,
  //     selectedPage: 1,
  //     productsToDisplay: productsSorted.slice((this.pageSize) - this.pageSize, (this.pageSize))
  //   })
  // }

  // handlePaginationSelected(selectedPage) {
  //   this.setState({
  //     selectedPage: selectedPage,
  //     productsToDisplay: this.state.sortedProducts.slice((selectedPage * this.pageSize) - this.pageSize, (selectedPage * this.pageSize)) 
  //   })
  // }
  
  // toggleVisibleElement(e){
    
  //   const leftNavBtn = document.querySelectorAll('.left-nav-btn');
  //   leftNavBtn.forEach(element => {
  //     element.addEventListener('click', (event) => {
  //       event.stopPropagation();
  //       // event.preventDefault();
  //       element.nextSibling.classList.toggle('hide');
  //     })
  //   });
  // }
  render() {
    return (
      <div>
        
          <ProductsList products={this.state.productsToDisplay}/>
        <div className="container-fluid">
          <Pagination className="pagination-bottom"
            totalItems={this.state.sortedProducts.length}
            pageSize={this.pageSize}
            onSelect={this.handlePaginationSelected}
            activePage={this.state.selectedPage}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products
});

export default connect(mapStateToProps)(Home);

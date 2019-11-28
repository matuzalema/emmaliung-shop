
import React from 'react';
import {connect} from 'react-redux';


// //import styles
import "./Carousel.scss";


import ImageGallery from 'react-image-gallery';

class MyGallery extends React.Component {
    render() {
        return <ImageGallery items={this.props.params} />;
    }
}

const mapStateToProps = state => ({
    products: state.products
})

export default connect(mapStateToProps)(MyGallery);
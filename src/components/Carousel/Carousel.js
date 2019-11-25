import React from 'react';
import { Carousel } from 'react-bootstrap';
import {connect} from 'react-redux';

//import styles
import "./Carousel.scss";

const MyCarousel = () => (
    <div className="carousel-wrapper">
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100 carousel"
                    src={"../../images/aparat.jpg"}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 carousel"
                    src="../../images/aparat3.jpg"
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 carousel"
                    src="../../images/aparat2.jpg"
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    </div>
);

const mapStateToProps = state => ({
    products: state.products
})

export default connect(mapStateToProps)(MyCarousel);
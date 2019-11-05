import React from 'react';

//import styles
import "./Newsletter.scss";

//import components
import  NewsletterForm  from './NewsletterForm';

const Newsletter = () => (
    <>
    <div class="newsletter">
        <h1 className="newsletter-header"> Zapisz się do newslettera </h1>
        <div className="images">
            <div className="newsletter-img-wrapper">
                <img src="../../images/news.jpg" className="img-newsletter" alt="newsletter"/>
            </div>
            <div className="newsletter-img-wrapper">
                <img src="../../images/news2.jpg" className="img-newsletter" alt="newsletter" />
            </div>
            <div className="newsletter-img-wrapper">
                <img src="../../images/news1.jpg" className="img-newsletter" alt="newsletter" />
            </div>
            <div className="newsletter-img-wrapper">
                <img src="../../images/news3.jpg" className="img-newsletter" alt="newsletter" />
            </div>
                <div className="newsletter-img-wrapper">
                    <img src="../../images/news4.jpg" className="img-newsletter" alt="newsletter" />
                </div>
        </div>
        <div className="newsletter-info">
                <h2 className="nawsletter-h2">10% Rabatu dla wszystkich nowych subskrybentów!*</h2>
                <h3 className="nawsletter-h3">Bądź na bieżąco z wszystkimi nowościami produktowymi w naszym sklepie, także z kuponami oraz akcjami rabatowymi.* </h3>
                <h4 className="nawsletter-h4">Tylko przy pierwszej rejestracji, ważne przez 14 dni, minimalna wartość zamówienia to 100PLN.</h4>
        </div>
         <NewsletterForm />
    </div>
    </>
);

export default Newsletter;
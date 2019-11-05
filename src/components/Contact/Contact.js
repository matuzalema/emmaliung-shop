import React from "react";

//import styles
import "./Contact.scss";

export class Contact extends React.Component {
  render() {
    return <div className="contact">
     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2444.9244189302426!2d21.07789321550253!3d52.208420979756426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecd65ddc6aeab%3A0xf8a707c9fa1b9fd7!2sGwintowa+6%2C+00-704+Warszawa!5e0!3m2!1spl!2spl!4v1562183333928!5m2!1spl!2spl"></iframe>
      <div className="adress-wrapper">
        <h1 className="company">Photo Inventions</h1>
        <p className="adress">ul. Gwintowa 266 </p>
        <p className="adress">01-432 Warszawa</p><br /><br/>
        <p className="adress"> Infolinia:</p>
        <p className="adress">PN-PT 8:00-20:00 </p>
        <p className="adress">SOB-ND 9:00-17:00 </p>
        <p className="adress">022 600-34-24 </p>
      </div>
    </div>;
  }
}
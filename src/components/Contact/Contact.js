import React from "react";

//import styles
import "./Contact.scss";

export class Contact extends React.Component {
  render() {
    return <div className="contact">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2594.9134794696865!2d22.584626507991366!3d49.42944972467902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473bf2cf8cddbc4f%3A0x9a19daa36c658f64!2sRynek%2C%2038-700%20Ustrzyki%20Dolne!5e0!3m2!1spl!2spl!4v1581462100337!5m2!1spl!2spl"></iframe>
      <div className="adress-wrapper">
        <h1 className="company-contact">Kontakt</h1>
        <p className="adress">Justyna Bloch</p>
        <p className="adress">Tel. 661 910 177</p><br /><br/>
        <p className="adress mail">tynapa@gmail.com</p>
        <p className="adress">Konto allegro: Tynapa</p>
        <p className="adress">Konto olx: Tynapa</p>
      </div>
    </div>;
  }
}
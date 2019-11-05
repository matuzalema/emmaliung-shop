import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from 'mdbreact';

//import styles
import "./Feedback.scss";

class Feedback extends React.Component {
    state = {
        fname: "",
        lname: "",
        email: "",
    };

    submitHandler = event => {
        event.preventDefault();
        event.target.className += " was-validated";
    };

    changeHandler = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        return (
            <div className='register'>
                <form
                    className="needs-validation"
                    onSubmit={this.submitHandler}
                    noValidate
                >
                    <MDBRow>
                        <MDBCol md="4" className="mb-3">
                            <label
                                htmlFor="defaultFormRegisterNameEx"
                                className="grey-text">
                                Nick
                            </label>
                            <input
                                value={this.state.fname}
                                name="fname"
                                onChange={this.changeHandler}
                                type="text"
                                id="defaultFormRegisterNameEx"
                                className="form-control"
                                placeholder="Your nick"
                                required
                            />
                            <div className="valid-feedback">Ok</div>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol md="4" className="mb-3">
                            <label
                                htmlFor="defaultFormRegisterConfirmEx3"
                                className="grey-text">
                                Email
                            </label>
                            <input
                                value={this.state.email}
                                onChange={this.changeHandler}
                                type="email"
                                id="defaultFormRegisterConfirmEx3"
                                className="form-control"
                                name="email"
                                placeholder="Twój email"
                                required
                            />
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol md="4" className="mb-3">
                            <label
                                htmlFor="defaultFormRegisterConfirmEx3"
                                className="grey-text">
                                Tytuł wiadomości
                            </label>
                            <input
                                value={this.state.password}
                                onChange={this.changeHandler}
                                type="text"
                                id="defaultFormRegisterConfirmEx3"
                                className="form-control"
                                name="text"
                                placeholder="tytuł"
                                required
                            />
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol md="4" className="mb-3">
                            <label
                                htmlFor="defaultFormRegisterConfirmEx3"
                                className="grey-text">
                                Napisz wiadomość
                            </label>
                            <textarea
                                value={this.state.password}
                                onChange={this.changeHandler}
                                type="area"
                                id="defaultFormRegisterConfirmEx3"
                                className="form-control"
                                name="text"
                                required
                            />
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol md="4" className="mb-3">
                            <MDBBtn className="button button-primary" type="submit">
                                Wyślij
                            </MDBBtn>
                        </MDBCol>
                    </MDBRow>
                </form>
            </div>
        );
    }
}

export default Feedback;
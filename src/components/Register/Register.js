import React from "react";
import { MDBRow, MDBCol, MDBBtn } from "mdbreact";
import "./Register.scss";

class Register extends React.Component {
    state = {
        fname: "",
        lname: "",
        email: "",
        city: "",
        state: "",
        zip: ""
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
                            <small id="emailHelp" className="form-text text-muted">
                               Nie usdostępnimy nikomu Towjego adresu email
                            </small>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol md="4" className="mb-3">
                            <label
                                htmlFor="defaultFormRegisterConfirmEx3"
                                className="grey-text">
                               Podaja nowe hasło
                            </label>
                            <input
                                value={this.state.password}
                                onChange={this.changeHandler}
                                type="password"
                                id="defaultFormRegisterConfirmEx3"
                                className="form-control"
                                name="password"
                                placeholder="Twoje hasło"
                                required
                            />
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol md="4" className="mb-3">
                            <div className="custom-control custom-checkbox pl-3">
                                <input
                                    className="custom-control-input"
                                    type="checkbox"
                                    value=""
                                    id="invalidCheck"
                                    required
                                />
                                <label className="custom-control-label" htmlFor="invalidCheck">
                                    Akceptuję regulami
                                </label>
                                <div className="invalid-feedback">
                                    Zaakceptuj regulamin
                                </div>
                            </div>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol md="4" className="mb-3">
                            <MDBBtn className="button button-primary" type="submit">
                            Zarejestruj
                            </MDBBtn>
                        </MDBCol>
                    </MDBRow>
                </form>
            </div>
        );
    }
}

export default Register;
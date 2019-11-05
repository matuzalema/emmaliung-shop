import React from "react";
import { connect } from "react-redux";

//import styles
import './Order.scss';


class Order extends React.Component {

    renderTableData() {
        return this.props.cartContent.map((product, index) => {
            const { id, name, quantity, price } = product
            return (
                <tr key={id}>
                    <td className="order-td">{name}</td>
                    <td className="order-td">{quantity}</td>
                    <td className="order-td">{price}</td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div className='order'>
                <h1 className='order-header'>Twoje zamówienie</h1>
                <table className='order-table'>
                    <thead className='order-thead'>
                        <tr className='order-tr'>
                            <th className='order-th'>nazwa</th>
                            <th className='order-th'>ilość</th>
                            <th className='order-th'>cena</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTableData()}
                    </tbody>
                </table>
                <h2 className="sum">Do zapłaty: {this.props.overallPrice} PLN</h2>
                <button type="submit" className="button button-primary pay">zapłać</button>
            </div>
        )
    }   
}

const mapStateToProps = state => ({
    cartContent: state.cartContent.cartContent,
    overallPrice: state.cartContent.overallPrice,
});

export default connect(mapStateToProps)(Order);
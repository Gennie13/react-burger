import React from "react";
import { connect } from "react-redux";

import Burger from "../../components/Burger";
import Button from "../../components/General/Button";
import css from "./style.module.css";
import { Route } from "react-router-dom";
import ContactData from "../../components/ContactData";

class ShippingPage extends React.Component {
    //render umnu ajillah function->componentWillMount

    cancelOrder = () => {
        this.props.history.goBack();
        // this.props.history.push('/');
    };

    showContactData = () => {
        this.props.history.replace("/ship/contact")
    };

    render() {
        return (
            <div className={css.ShippingPage} >
                <p style={{fontSize: "24px"}}>
                    <strong>Захиалгаа шалгана уу...</strong>
                </p>
                
                <p style={{fontSize: "24px"}}>
                    <strong>ДҮН: {this.props.price} ₮</strong>
                </p>

                <Burger />
                
                <Button 
                    clicked={this.cancelOrder} btnType="Danger" 
                    text="ЗАХИАЛГЫГ ЦУЦЛАХ" 
                />
                
                <Button 
                    clicked={this.showContactData} btnType="Success" text="ХҮРГЭЛИЙН МЭДЭЭЛЭЛ ОРУУЛАХ" 
                />

                <Route path="/ship/contact">
                    <ContactData     />
                </Route>

            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        price: state.burgerReducer.totalPrice
    };
};

export default connect(mapStateToProps)(ShippingPage)
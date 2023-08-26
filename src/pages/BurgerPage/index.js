import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import Burger from "../../components/Burger";
import BuildControls from "../../components/BuildControls";
import Modal from "../../components/General/Modal";
import OrderSummary from "../../components/OrderSummary";
// import axios from "../../axios-orders";
import Spinner from "../../components/General/Spinner";


//class
class BurgerPage extends Component {

    //ugugdul hadgalah, eh componentsoos BurgerPage compini=ants ruu nairlagaa yvuulna
    state = {
        //захиалгын товч
        confirmOrder: false,
    };
    
    //zahialah tovch
    continueOrder = () => {
        //shippingPage ruu shiljih
        this.props.history.push("/ship");
    };

    //захиалгын товч
    showComfirmModal = () => {
        this.setState({confirmOrder: true});
    };
    closeConfirmModal = () => {
        this.setState({confirmOrder: false});
    };

    render() {
        return(
            <div>
                <Modal 
                    closeConfirmModal={this.closeConfirmModal} 
                    show={this.state.confirmOrder}
                >    
                    {this.state.loading ? (
                    <Spinner/>
                    ) : (
                    <OrderSummary 
                        onCancel={this.closeConfirmModal}
                        onContinue={this.continueOrder} 
                    />
                    )
                    }
                </Modal>

                <Burger/>

                <BuildControls
                    showComfirmModal={this.showComfirmModal}
                    ortsHasah={this.props.burgerOrtsHasah} 
                    ortsNemeh={this.props.burgerOrtsNemeh}
                />
            </div>
        );
    }
}


export default withRouter(BurgerPage);
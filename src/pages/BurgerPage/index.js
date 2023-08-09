import React, { Component } from "react";

import Burger from "../../components/Burger";
import BuildControls from "../../components/BuildControls";
import Modal from "../../components/General/Modal";
import OrderSummary from "../../components/OrderSummary";

//price
const Ingredients_Price = { salad: 150, cheese: 250, bacon: 800, meat: 1500 };
const Ingredients_Names = {
    bacon: "гахайн мах",
    cheese: "бяслаг",
    meat: "үхрийн мах",
    salad: "салад"
};

//class
class BurgerBuilder extends Component {

    //ugugdul hadgalah, eh componentsoos burgerbuilder compini=ants ruu nairlagaa yvuulna
    state = {
        ingredients : {
            salad: 0,
            cheese: 1,
            bacon: 0,
            meat: 0
        },

        totalPrice: 1000,
        //орцуудыг сонгосон эсэх
        purchasing: false,
        //захиалгын товч
        confirmOrder: false
    };
    //захиалгын товч
    showComfirmModal = () => {
        this.setState({confirmOrder: true});
    };
    closeConfirmModal = () => {
        this.setState({confirmOrder: false});
    };
    ContinueOrder = () => {
        console.log("continue...")
    }

    ortsNemeh = (type) => {
        // this.setState()
        const newIngredients = {...this.state.ingredients};
        newIngredients[type]++;

        const newPrice = this.state.totalPrice + Ingredients_Price[type];


        this.setState({purchasing: true, totalPrice: newPrice, ingredients: newIngredients});
    };

    ortsHasah = (type) => {
        if(this.state.ingredients[type] > 0)
        {
            const newIngredients = {...this.state.ingredients};
            newIngredients[type]--;
            const newPrice = this.state.totalPrice - Ingredients_Price[type]
            this.setState({purchasing: newPrice>1000,  totalPrice: newPrice,ingredients: newIngredients});
        }
        
    };


    render() {
        const disabledIngredients = {
            ...this.state.ingredients
        };
        for(let key in disabledIngredients) {
            disabledIngredients[key] = disabledIngredients[key] <= 0;

        }
        return(
            <div>
                <Modal 
                    closeConfirmModal={this.closeConfirmModal} 
                    show={this.state.confirmOrder}>
                    <OrderSummary 
                        onCancel={this.closeConfirmModal}
                        onContinue={this.ContinueOrder}
                        price={this.state.totalPrice}
                        ingredientsNames = {Ingredients_Names}
                        ingredients={this.state.ingredients} />
                </Modal>
                <Burger orts={this.state.ingredients} />
                <BuildControls
                    showComfirmModal={this.showComfirmModal}
                    ingredientsNames = {Ingredients_Names}
                    disabled={!this.state.purchasing}
                    price={this.state.totalPrice}
                    disabledIngredients={disabledIngredients} 
                    ortsHasah={this.ortsHasah} ortsNemeh={this.ortsNemeh}/>
            </div>
        );
    }
}


export default BurgerBuilder;
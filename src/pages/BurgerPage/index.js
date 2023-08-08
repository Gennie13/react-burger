import React, { Component } from "react";

import Burger from "../../components/Burger";
import BuildControls from "../../components/BuildControls";

//price
const Ingredients_Price = { salad: 150, cheese: 250, bacon: 800, meat: 1500 };
//class
class BurgerBuilder extends Component {

    //ugugdul hadgalah, eh componentsoos burgerbuilder compini=ants ruu nairlagaa yvuulna
    state = {
        ingredients : {
            salad: 0,
            cheese: 0,
            bacon: 0,
            meat: 0
        },

        totalPrice: 1000,
        purchasing: false
    };


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
                <Burger orts={this.state.ingredients} />
                <BuildControls
                    disabled={!this.state.purchasing}
                    price={this.state.totalPrice}
                    disabledIngredients={disabledIngredients} 
                    ortsHasah={this.ortsHasah} ortsNemeh={this.ortsNemeh}/>
            </div>
        );
    }
}


export default BurgerBuilder;
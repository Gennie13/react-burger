import React from "react";
import { connect } from "react-redux";
import BurgerIngredient from "../BurgerIngredient";
import css from "./style.module.css";
//add function oruulj ugdug
import { withRouter } from "react-router-dom";

const Burger = props => {
    const items = Object.entries(props.orts);

    let burgerIngredients = [];
    // davtaltaar content uusej bna
    items.map(el => {
        for(let i=0; i < el[1]; i++)
            // burgerIngredients.push
            burgerIngredients.push(<BurgerIngredient key={`${el[0]}${i+1}`} type={el[0]} />);
    });

    if(burgerIngredients.length === 0)
        burgerIngredients = <p>Хачиртай талхны орцыг сонгоно уу?</p>;

    return (
        <div className={css.Burger}>
            <BurgerIngredient type="bread-top"/>
            {burgerIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        orts: state.burgerReducer.ingredients
    };
};
export default connect(mapStateToProps)(withRouter(Burger));
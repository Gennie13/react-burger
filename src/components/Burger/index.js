import React from "react";

import BurgerIngredient from "../BurgerIngredient";
import css from "./style.module.css";
const Burger = props => {
    const items = Object.entries(props.orts);
    let burgerIngredients = [];
    items.map(el => {
        for(let i=0; i < el[1]; i++)
            burgerIngredients.push(<BurgerIngredient key={`${el[0]}${i+1}`} type={el[0]} />);
    });

    if(burgerIngredients.length === 0)
        burgerIngredients = <p>Хачиртай талхны орцыг сонгоно уу?</p>;

    return (
        <div className={css.Burger}>
            <BurgerIngredient type="bread-top"/>
            {burgerIngredients}
            {/* <BurgerIngredient type="salad"/>
            <BurgerIngredient type="bacon"/>
            <BurgerIngredient type="cheese"/>
            <BurgerIngredient type="meat"/>
            <BurgerIngredient type="meat"/> */}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    )
    
};

export default Burger;
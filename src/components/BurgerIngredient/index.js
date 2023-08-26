import React from "react";

import css from "./style.module.css";

const BurgerIngredient = props => {
    if(props.type === 'salad')
        return (<div className={css.Salad}>
            {/* <button onClick={() => props.choose("салад")}>x</button> */}
        </div>);
    if(props.type === 'bacon')
        return (<div className={css.Bacon}>
            {/* <button onClick={() => props.choose("гахайн мах")}>x</button> */}
            </div>);
    if(props.type === 'meat')
        return (<div className={css.Meat}>
            {/* <button onClick={() => props.choose("үхрийн мах")}>x</button> */}
            </div>);
    if(props.type === 'cheese')
        return (<div className={css.Cheese}>
            {/* <button onClick={() => props.choose("бяслаг")}>x</button> */}
            </div>);

    if(props.type === 'bread-bottom')
        return <div className={css.BreadBottom}></div>;
    if(props.type === 'bread-top')
        return (
            <div className={css.BreadTop}>
                <div className={css.Seed}></div>
                <div className={`${css.Seed} ${css.Second}`}></div>
                <div className={`${css.Seed} ${css.Third}`}></div>
                <div className={`${css.Seed} ${css.Fourth}`}></div>
            </div>
        );
    return <div>-</div>
};

export default BurgerIngredient;
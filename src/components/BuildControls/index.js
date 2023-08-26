import React from "react";
import { connect } from "react-redux";

import * as actions from "../../redux/actions/burgerActions";
import BuildControl from "../BuildControl/index";
import css from "./style.module.css";

const BuildControls = props => {
    const disabledIngredients = {
        ...props.burgeriinOrts
    };
    for(let key in disabledIngredients) {
        disabledIngredients[key] = disabledIngredients[key] <= 0;
    }

    return (
        <div className={css.BuildControls}>
            <p>
                Бургерийн үнэ : <strong>{props.price} ₮</strong>
            </p>

            {
            Object.keys(props.IngredientsNames).map(el => (
                <BuildControl 
                    key={el}
                    ortsHasah={props.ortsHasah} ortsNemeh={props.ortsNemeh} disabled={disabledIngredients} type={el} 
                    orts={props.IngredientsNames[el]}
                />
            ))
            }
            <button 
                onClick={props.showComfirmModal} 
                disabled={!props.purchasing} 
                className={css.OrderButton}
            >
                ЗАХИАЛАХ
            </button>
    </div>
    );
};

const mapStateToProps = state => {
    return {
        burgeriinOrts: state.burgerReducer.ingredients,
        price: state.burgerReducer.totalPrice,
        purchasing: state.burgerReducer.purchasing,
        IngredientsNames: state.burgerReducer.IngredientsNames
    };
};
const mapDispatchToProps = dispatch => {
    return {
        ortsNemeh: ortsNer => dispatch(actions.addIngredient(ortsNer)),
        ortsHasah: ortsNer => dispatch(actions.removeIngredient(ortsNer))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(BuildControls);
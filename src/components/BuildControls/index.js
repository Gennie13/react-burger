import React from "react";

import BuildControl from "../BuildControl/index";
import css from "./style.module.css";

const BuildControls = props => {
    const controls = {
        bacon: "гахайн мах",
        cheese: "бяслаг",
        meat: "үхрийн мах",
        salad: "салад"
    }

    return (
        <div className={css.BuildControls}>
            <p>
                Бургерийн үнэ : <strong>{props.price} ₮</strong>
            </p>

            {
            Object.keys(controls).map(el => (
                <BuildControl 
                    key={el}
                    ortsHasah={props.ortsHasah} ortsNemeh={props.ortsNemeh} disabled={props.disabledIngredients} type={el} orts={controls[el]}
                />
            ))
            }
        <button disabled={props.disabled} className="OrderButton">Захиалах</button>
    </div>

    );
};

export default BuildControls;

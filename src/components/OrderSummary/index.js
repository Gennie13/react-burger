import React from "react";
import { connect } from "react-redux";

import Button from "../General/Button"

const OrderSummary = props => {
    // console.log("sum==>", props);
    return (
        <div>
            <h3>Таны захиалга</h3>
            <p>Таны сонгосон орцууд: </p>
            <ul>
                {Object.keys(props.ingredients).map(el => (
                    <li key={el}>
                        {props.ingredientsNames[el]} : {props.ingredients[el]}
                    </li>
                ))}
            </ul>
            <p>
                <strong>Захиалгын үнэ: {props.price} ₮ </strong>
            </p>
            <p>Цаашаа үргэжлүүлэх үү?</p>
            
            <Button 
                clicked={props.onCancel} btnType="Danger" 
                text="ТАТГАЛЗАХ"
            />
            
            <Button 
                clicked={props.onContinue} btnType="Success" 
                text="ҮРГЭЖЛҮҮЛЭХ" 
            />
        </div>
    );
};

const mapStateToProps = state => {
    return {
        ingredients: state.burgerReducer.ingredients,
        ingredientsNames: state.burgerReducer.IngredientsNames,
        price: state.burgerReducer.totalPrice
    };
};
export default connect(mapStateToProps)(OrderSummary);
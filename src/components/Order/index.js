import React from "react";

import css from "./style.module.css";

//function componens
const Order = props => {
    // console.log("order--->", this.props)
    return (
        <div className={css.Order}>
            <p>
                Орц : <strong><br/>Гахайн мах : {props.order.orts.bacon}, <br/>Салад : {props.order.orts.salad}, <br/>Үхрийн мах : {props.order.orts.meat}, <br/>Бяслаг : {props.order.orts.cheese}</strong>
            </p>
            <p>
                Хаяг : <strong>{props.order.hayag.city} | {props.order.hayag.street} | {props.order.hayag.name}</strong>
            </p>
            <p>
                Үнийн дүн : <strong>{props.order.dun} ₮</strong>
            </p>
        </div>
    );
};


export default Order;
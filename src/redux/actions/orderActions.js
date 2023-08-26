import axios from "../../axios-orders";

export const loadOrders = (userId) => {
    return function(dispatch, getState) {
        //Orders-iig tataj ehelsen
        dispatch(loadOrdersStart());

        const token = getState().signupReducer.token;

        axios
            .get(`/orders.json?auth=${token}&orderBy="userId"&equalTo="${userId}"`)
            .then(response => {
                const loadedOrders = Object.entries(response.data).reverse();
                dispatch(loadOrdersSuccess(loadedOrders));        
            })
            .catch(err => dispatch(loadOrdersError(err)));
    };
};

export const loadOrdersSuccess = loadedOrders => {
    return{
        type: "LOAD_ORDERS_SUCCESS",
        orders: loadedOrders
    };
};

export const loadOrdersError = error => {
    return{
        type: "LOAD_ORDERS_ERROR",
        error
    };
};
export const loadOrdersStart = () => {
    return{
        type: "LOAD_ORDERS_START"
    };
};


//Захиалгыг хадгалах хэсэг
export const saveOrder = newOrder => {
    return function(dispatch, getState) {
        dispatch(saveOrderStart());
        const token = getState().signupReducer.token;

         // // Fireatabase-d hadgalah
        axios
            .post(`/orders.json?auth=${token}`, newOrder)
            .then(response => {
                dispatch(saveOrderSuccess());
            })
            .catch(error => {
                dispatch(saveOrderError(error))
            });
            // .finally(()=>{
            //     this.setState({loading: false});
            //     this.props.history.replace("/orders");
            // })
    };
};

export const saveOrderStart = () => {
    return {
        type: "SAVE_ORDER_START"
    };
};
export const saveOrderSuccess = () => {
    return {
        type: "SAVE_ORDER_SUCCESS"
    };
};
export const saveOrderError = error => {
    return {
        type: "SAVE_ORDER_ERROR",
        errorMessage: error
    };
};
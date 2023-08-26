const initialState ={
    
    //loading - order
    orders: [
        // ["-NcOUmFW_DenSOMmpvP9",
        //     {
        //         dun: 3550,
        //         hayag:{
        //             city:"orts",
        //             name:"burgerReducer",
        //             street:"ortsiin hesehh"
        //         },
        //         orts: {
        //             bacon: 1,
        //             cheese: 1,
        //             meat: 1,
        //             salad: 0    
        //         }
        //     }]
    ],
    loading: false,
    error: null,

    //save - order
    newOrder: {
        saving: false,
        finished: false,
        error: null
    }
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case "LOAD_ORDERS_START" : return {
            ...state,
            loading: true
        };

        case "LOAD_ORDERS_SUCCESS" : return {
            ...state,
            loading: false,
            orders: action.orders
        };

        case "LOAD_ORDERS_ERROR" : return {
            ...state,
            loading: false,
            error: action.error
        };

        case "SAVE_ORDER_SUCCESS" : return {
            ...state,
            newOrder: {
                ...state.newOrder,
                saving: false,
                finished: true,
                error: null
            }
        };

        case "SAVE_ORDER_ERROR": return{
            ...state,
            newOrder: {
                ...state.newOrder,
                saving: false,
                finished: true,
                error: action.errorMessage
            }
        };

        default:
            return state;
    }    
};

export default reducer;
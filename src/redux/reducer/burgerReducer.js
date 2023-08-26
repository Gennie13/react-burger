const initialState = {
    ingredients : {
        salad: 0,
        cheese: 0,
        bacon: 0,
        meat: 0
    },

    totalPrice: 1000,
    //орцуудыг сонгосон эсэх,=> zahialga tsesiig shalgah
    purchasing: false,
    IngredientsNames: {
        bacon: "гахайн мах",
        cheese: "бяслаг",
        meat: "үхрийн мах",
        salad: "салад"
    }
};

//price
const INGREDIENT_PRICES = { salad: 150, cheese: 250, bacon: 800, meat: 1500 };

const reducer = (state = initialState, action) => {
    // console.log("reducer-----> ",action);
    if(action.type === "ADD_INGREDIENT"){
        // update hiiihgui shine object uusgeh uchir return hiine
        return{
            ...state,
            ingredients : {
                ...state.ingredients,
                [action.ortsNer]: state.ingredients[action.ortsNer] + 1,
            },
        
            totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ortsNer],
            purchasing: true
            
        };
    }else if (action.type === "REMOVE_INGREDIENT"){
        const newTotalPrice = state.totalPrice - INGREDIENT_PRICES[action.ortsNer];
        return {
            ...state,
            ingredients : {
                ...state.ingredients,
                [action.ortsNer]: state.ingredients[action.ortsNer] - 1
            },
            totalPrice: newTotalPrice,
            purchasing: newTotalPrice > 1000
        };
    };
    return state;
};

export default reducer;
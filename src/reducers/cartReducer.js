import { ADD_TO_CART, ADD_QUANTITY, SUBSTRACT_QUANTITY, REMOVE_CART_PRODUCT, ENABLE_PROMOTION } from "../actions/cartActions";

const initialState = {
    cartContent: [],
    overallPrice: 0,
    cartProductsQuantity: 0,
    promotionEnabled: false
}

function sumCartPrices(promotionActive, cart) {
    let sumPrices = cart.reduce(function(prev, cur){
        return prev + (cur.price * cur.quantity);
    }, 0);
    if (promotionActive){
        sumPrices = sumPrices * 0.9;
    }
    return sumPrices.toFixed(2);   
}

function sumProductsInCart(cart) {
    let sumProductsInCart = cart.reduce(function (prev, cur) {
        return prev + cur.quantity;
    }, 0);
    return sumProductsInCart;
}

function setStateWithNewPropertis(state, newCart){
    return Object.assign({}, state, {
        cartContent: newCart,
        overallPrice: sumCartPrices(state.promotionEnabled, newCart),
        cartProductsQuantity: sumProductsInCart(newCart)
    })
}

export default function(state = initialState, action) {
    switch (action.type) {
        case ADD_TO_CART:
            let quantityUpdated = false;
            let newCartContent = state.cartContent;
            for (let i = 0; i < newCartContent.length; i++){
                if (newCartContent[i].id === action.product.id){
                    newCartContent[i].quantity += 1;
                    quantityUpdated = true;
                }
            }
            if(!quantityUpdated) {
                newCartContent = [...newCartContent, action.product];
            }
            return setStateWithNewPropertis(state, newCartContent);

        case ADD_QUANTITY:
            const newCartContentAfterAddQuantity = state.cartContent.map(product => {
                return product.id === action.productId
                    ? Object.assign({}, product, {quantity: product.quantity + 1})
                    : product;
            });
            return setStateWithNewPropertis(state, newCartContentAfterAddQuantity);
        
        case SUBSTRACT_QUANTITY:
            let newCartContentAfterSubstractQuantity = state.cartContent.map(product => {
                return product.id === action.productId
                    ? Object.assign({}, product, {quantity: product.quantity -1}) 
                    : product;
            });
            newCartContentAfterSubstractQuantity = newCartContentAfterSubstractQuantity.filter(product => product.quantity > 0)
            return setStateWithNewPropertis(state, newCartContentAfterSubstractQuantity);

        case REMOVE_CART_PRODUCT:
            const removenewCartContentAfterRemove = state.cartContent.filter(product => product.id !== action.productId)
            return setStateWithNewPropertis(state, removenewCartContentAfterRemove);
        
        case ENABLE_PROMOTION:
            if (action.discountCode === "foto") {
                return Object.assign({}, state, {
                    promotionEnabled: true,
                    overallPrice: sumCartPrices(true, state.cartContent)
                }); 
            }
            return state;

        default: return state;
    }
}
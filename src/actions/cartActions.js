export const ADD_TO_CART = "ADD_TO_CART";
export const ADD_QUANTITY = "ADD_QUANTITY";
export const SUBSTRACT_QUANTITY = "SUBSTRACT_QUANTITY";
export const REMOVE_CART_PRODUCT = "REMOVE_CART_PRODUCT";
export const ENABLE_PROMOTION = "ENABLE_PROMOTION";

export const addToCart = (product) => {
    return {
        type: ADD_TO_CART,
        product
    };
};

export const addQuantity = productId => {
    return {
        type: ADD_QUANTITY,
        productId
    }
}

export const substractQuantity = productId => {
    return {
        type: SUBSTRACT_QUANTITY,
        productId
    }
}

export const removeCartProduct = productId => {
    return {
        type: REMOVE_CART_PRODUCT,
        productId
    }
}

export const enablePromotion = discountCode => {
    return {
        type: ENABLE_PROMOTION,
        discountCode
    }
}
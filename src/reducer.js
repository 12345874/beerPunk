//initial state of the store....

export const initialState = {
    basket: []
};

//attach reducer to provide response according to the action...
const reducer = (state, action) => {
    switch (action.type) {
        // add item to the basket...
        case "ADD_TO_BASKET":
            return {
                //whatever the state originally it was...
                ...state,
                //whatever the basket currently was + whatever actully decided to the item...
                basket: [...state.basket, action.item],
            }
        // remove the item from the basket...
        case "REMOVE_FROM_BASKET":

            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );
            let newBasket = [...state.basket];
        // slice the item from the basket by one...
            if (index >= 0) {
                newBasket.splice(index, 1);

            } else {
                console.warn(
                    `Cant remove product (id: ${action.id}) as its not in basket!`
                )
            }
            return {
                ...state,
                basket: newBasket
            }


            default:
            return state;
    }
}

export default reducer;

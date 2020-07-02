const initialState = {
  cart: [],
}

const cart = (state = initialState, action) => {
  switch(action.type){
    case "ADD_CART":
      if(!state.cart.includes(action.payload)) {
        return {
          ...state,
          cart: [...state.cart, action.payload],
        }
      }

      return state
    case "REMOVE_CART":
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload),
      }
    default: 
      return state
  }
}

export default cart
const addCart = (payload) => {
  return {
      type: "ADD_CART",
      payload
  }
}

const removeCart = (payload) => {
  return {
      type: "REMOVE_CART",
      payload
  }
}


export default {
  addCart,
  removeCart
}
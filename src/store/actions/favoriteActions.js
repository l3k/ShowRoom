const addFavorite = (payload) => {
  return {
      type: "ADD_FAVORITE",
      payload
  }
}

const removeFavorite = (payload) => {
  return {
      type: "REMOVE_FAVORITE",
      payload
  }
}


export default {
  addFavorite,
  removeFavorite
}
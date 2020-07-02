const initialState = {
  favorite: [],
}

const favorite = (state = initialState, action) => {
  switch(action.type){
    case "ADD_FAVORITE":
      if(!state.favorite.includes(action.payload)) {
        return {
          ...state,
          favorite: [...state.favorite, action.payload],
        }
      }

      return state
    case "REMOVE_FAVORITE":
      return {
        ...state,
        favorite: state.favorite.filter(item => item.id !== action.payload),
      }
    default: 
      return state
  }
}

export default favorite
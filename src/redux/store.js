import { createStore } from 'redux';

// ตัว reducer
const initialState = {
  shoppingList: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SHOPPING_LIST':
      return { ...state, shoppingList: action.payload };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
import { SET_NOTIFICATION, REMOVE_NOTIFICATION } from '../types';

export default (state, action) => {
  switch (action.type) {
    case SET_NOTIFICATION:
      return [...state, action.payload];
    case REMOVE_NOTIFICATION:
      return state.filter(msg => msg.id !== action.payload);
    default:
      return state;
  }
};

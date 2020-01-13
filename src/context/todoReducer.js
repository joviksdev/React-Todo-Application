const reducer = (state, action) => {
  switch (action.type) {
    case 'GET_TODO':
      return {
        ...state,
        todos: action.payload,
        loading: false
      };

    case 'SET_CHECK':
      return {
        ...state,
        todos: action.payload
      };
    case 'SET_LOADING':
      return {
        ...state,
        loading: true
      };

    case 'SET_ALERT':
      return {
        ...state,
        alert: action.payload
      };

    case 'REMOVE_ALERT':
      return {
        ...state,
        alert: null
      };

    default:
      return state;
  }
};

export default reducer;

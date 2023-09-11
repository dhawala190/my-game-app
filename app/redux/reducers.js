const initialState = {
  points: 0,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'WIN':
      return {...state, points: state.points + action.payload};
    case 'LOSE':
      return {...state, points: state.points - action.payload};
    case 'RESET':
      return {...state, points: action.payload};
    default:
      return state;
  }
};

export default rootReducer;

import { ACTION_TYPES } from "../actions/countriesAction";

// Define initial states.
const initialState = {
  countriesList: []
};

const Named= (state = initialState, action) => {
  switch (action.type) {
      
    case ACTION_TYPES.COUNTRIES_FETCHED:
      console.log(action);
      return { ...state, countriesList: action.payload };

    default:
      return state;
  }
};

export default Named;

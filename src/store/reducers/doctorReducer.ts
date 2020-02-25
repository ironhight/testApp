import * as types from "../constants/actionTypes";

const initialState: [] = [];

const doctorReducer = (
  state = initialState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case types.GET_DOCTOR:
      return [...state, ...action.payload];
    default:
      return state;
  }
};

export default doctorReducer;

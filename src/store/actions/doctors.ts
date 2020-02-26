import api from "../../mocks";
import * as types from "../constants/actionTypes";

export const getDoctor = () => (
  dispatch: (arg0: { type: string; payload: any }) => void
) => {
  return api
    .get("")
    .then(res => {
      dispatch({
        type: types.GET_DOCTOR,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

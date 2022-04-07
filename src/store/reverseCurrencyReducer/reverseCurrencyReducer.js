import {defaultState} from "../state.js";

const action = {type: "", payload: "?"}
export const reverseCurrencyReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "REVERSE_CURRENCY":
      let outTempCur = state.inputCur;
      let inpTempCur = state.outputCur;

      return {...state, inputCur: Object.assign({}, inpTempCur), outputCur: Object.assign({}, outTempCur)};
    default:
      return state;
  }
}

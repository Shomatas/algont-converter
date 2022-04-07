import {defaultState} from "../state.js";
import render from '../../render.js';
import {store} from '../store.js';

const action = {type: "", payload: "?"}
let quotes;

fetch('http://apilayer.net/api/live?access_key=b46e65ff3b8e8a2c9a1cd0f90fc09b17&currencies=RUB,USD,EUR&source=USD&format=1')
.then(data => data.json())
.then(data => {
  quotes = new Map();
  let usd = new Map();
  usd.set('RUB', data.quotes.USDRUB);
  usd.set('USD', data.quotes.USDUSD);
  usd.set('EU', data.quotes.USDEUR);

  let rub = new Map();
  rub.set('RUB', 1.0);
  rub.set('USD', 1.0 / data.quotes.USDRUB);
  rub.set('EU', data.quotes.USDEUR / data.quotes.USDRUB);

  let eu = new Map();
  eu.set('RUB', data.quotes.USDRUB / data.quotes.USDEUR);
  eu.set('USD', 1.0 / data.quotes.USDEUR);
  eu.set('EU', 1);

  quotes.set('RUB', rub);
  quotes.set('USD', usd);
  quotes.set('EU', eu);

  defaultState.quotes = quotes;
  render(store);
});

export const calculateCurrency = (state = defaultState, action) => {
  switch (action.type) {
    case "CALCULATE_CURRENCY":
      if(isNaN(Number(action.payload))){
        return state;
      }
      let k = quotes.get(state.inputCur.default).get(state.outputCur.default);
      let tempCur = state.outputCur;
      tempCur.value = action.payload * k;
      let inpTempCur = state.inputCur;
      if(inpTempCur.value == 0) inpTempCur.value = Number(action.payload);
      else inpTempCur.value = action.payload;
      render();
      return {...state, inputCur: inpTempCur, outputCur: tempCur};
    case "REVERSE_CURRENCY":
      let outTempCur1 = state.inputCur;
      let inpTempCur1 = state.outputCur;
      return {...state, inputCur: Object.assign({}, inpTempCur1), outputCur: Object.assign({}, outTempCur1)};

    case "CHANGE_CURRENCY_OUTPUT":
      let val = Object.assign({}, state.outputCur);
      val.default = action.payload;
      let g = quotes.get(state.inputCur.default).get(val.default);
      val.value = Number(state.inputCur.value) * g;
      return {...state, outputCur: val};

    case "CHANGE_CURRENCY_INPUT":
      let inpSelect = Object.assign({}, state.inputCur);
      inpSelect.default = action.payload;
      let d = quotes.get(inpSelect.default).get(state.outputCur.default);
      let outSelect1 = state.outputCur;
      state.outputCur.value = Number(state.inputCur.value) * d;
      render();
      return {...state, inputCur: Object.assign({}, inpSelect)};
    default:
      return state;
  }
}

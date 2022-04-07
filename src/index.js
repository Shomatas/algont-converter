import './index.css';
import reportWebVitals from './reportWebVitals';
import {store} from './store/createStore.js';
import render from "./render.js";

const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

function timeout(delay: number) {
    return new Promise( res => setTimeout(res, delay) );
}

setTimeout(function () {
  render(store);
}, 1000);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

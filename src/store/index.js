import { createStore } from 'redux';
//import { createSlice, configureStore } from '@reduxjs/toolkit';
//import {createSlice} from '@rduxjs/toolkit';
const initialState = {
    counter: 0,
    showCounter: true
};
// createSlice({
//     name: 'counter',
//     initialState,
//     reducer: {
//         increment(state) {
//             state.counter++;
//         },
//         decrement(state) {
//             state.counter--;
//         },
//         increse(state, action) {
//             counter: state.counter + action.amount;
//         },
//         toggle(state) {
//             state.showCounter = !state.showCounter;
//         }
//     }
// })

const counterReducer = (state = initialState, action) => {
    if (action.type === 'increment') {
        return {
            counter: state.counter + 1,
            showCounter:state.showCounter
        }
    }
    if (action.type === 'decrement') {
        return {
            counter: state.counter - 1,
            showCounter:state.showCounter
        }
    }
    if (action.type === 'incrementBy5') {
        return {
            counter: state.counter + action.amount
        }
    }
    if (action.type === 'toggle') {
        return {
            showCounter:!state.showCounter,
            counter:state.counter
        }
    }
    return state;

}
const store = createStore(counterReducer);
// const store = configureStore({
//     reducer: createSlice.reducer
// });
export default store;
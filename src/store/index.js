import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = {
    counter: 0,
    showCounter: true
};
const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increse(state, action) {
            state.counter = state.counter + action.payload;
        },
        toggle(state) {
            state.showCounter = !state.showCounter;
        },
        multiply(state,action) {
            state.counter = state.counter * action.payload;
        },
        divide(state,action) {
            state.counter = state.counter / action.payload;
        },
        percent(state,action){
            state.counter = (state.counter * action.payload)/100;
        }
    }
})
const store = configureStore(
    { reducer: counterSlice.reducer }
);
export const counterActions = counterSlice.actions; //all function inside reducer property

export default store;
import { createSlice } from "@reduxjs/toolkit";

//name of action
//initial state
//reducer

const initialState={
    count:0
}


export const counterSlice=createSlice({
    name:"counter",
    initialState,
    reducers:{
        increment:(state)=>{
            state.count+=1;
        },
        decrement:(state)=>{
            state.count-=1;
        }

    }
});

export const {increment,decrement} =counterSlice.actions;
export default counterSlice.reducer;


// 🔹 In Redux, 3 Things Exist

// Action → just a plain object ({ type, payload }).

// Action Creator → a function that returns an action.

// Reducer → a function that updates state based on the action.

// 🔹 What happens in your createSlice

// You wrote:

// export const counterSlice = createSlice({
//   name: "counter",
//   initialState,
//   reducers: {
//     increment: (state) => {
//       state.count += 1;
//     },
//     decrement: (state) => {
//       state.count -= 1;
//     }
//   }
// });

// 1. Reducers (your logic)

// increment and decrement are reducer functions.

// They say how state should change when an action comes in.

// Example:

// increment: (state) => {
//   state.count += 1;
// }


// This means:
// 👉 "If the action is counter/increment, increase count by 1."

// 2. Actions (auto-created for you)

// When you wrote:

// export const { increment, decrement } = counterSlice.actions;


// 👉 Redux Toolkit generated action creators for you.

// increment() returns:

// { type: "counter/increment" }


// decrement() returns:

// { type: "counter/decrement" }


// If you had a payload, e.g. incrementByAmount: (state, action) => { state.count += action.payload }, then:

// incrementByAmount(5)


// would create:

// { type: "counter/incrementByAmount", payload: 5 }

// 3. Reducer (the one you export)
// export default counterSlice.reducer;


// This is the big reducer function that Redux Toolkit built for you.
// It’s equivalent to writing a manual switch-case reducer:

// function counterReducer(state = initialState, action) {
//   switch (action.type) {
//     case "counter/increment":
//       return { ...state, count: state.count + 1 };
//     case "counter/decrement":
//       return { ...state, count: state.count - 1 };
//     default:
//       return state;
//   }
// }

// 🔁 Putting It Together (Flow)

// UI (React) dispatches an action

// dispatch(increment());


// Action Creator generates an Action

// { type: "counter/increment" }


// Store sends that Action to the Reducer
// Reducer checks: “Is this counter/increment? Yes → increase count by 1.”

// New State is saved in Store
// UI re-renders with updated value.

// ✅ Simple Analogy

// Action = Waiter’s note: “Add 1 to count”.

// Reducer = Chef: “Okay, I’ll update the count based on the note.”

// Store = Kitchen counter: “Here’s the updated dish (state).”

// UI = Customer sees updated dish.

// 👉 So:

// Your reducers object defines how to change state.

// createSlice auto-generates Actions + Action Creators for each reducer.

// You export those (increment, decrement) to use in dispatch().

// You export the combined Reducer (counterSlice.reducer) to plug into the Store.
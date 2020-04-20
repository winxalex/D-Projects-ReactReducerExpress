import * as TaskActionTypes from "./TaskActionTypes";

const reducer = (state, action) => {


    return state;
    // switch (action.type) {
    //     case MyStoreActions.UPDATE_INPUT:
    //         return {
    //             ...state,
    //             inputText: action.data
    //         };

    //     default:
    //         return state;
    // }
}

class Reducer {

    subscribe = () => {
        console.log("m");
    }

    makeActionCreator(type, ...argNames) {
        return function (...args) {
            const action = { type }
            argNames.forEach((arg, index) => {
                action[argNames[index]] = args[index]
            })
            console.log("k=" + action);
            return action
        }
    }

}


export const TaskReducer = (actionTypes) => {

    const actions = [];

    function m(params) {

    }



    return (state, action) => {
        const cb = actions[action.type];
        if (cb) return cb(state, action);
        return state;
    }
}

var f = new Reducer().

    makeActionCreator(TaskActionTypes.CREATE_TASK, "groupdId", "name", "cb");
// const groupdId = 243;
// const name = "mile";
// const cb = () => groupdId;
//console.log(new Reducer().subscribe());
console.log(f(42424, "text", () => "k"));

// TaskReducer.subscribe(TaskActionTypes.CREATE_TASK, (state, action) => {
//     return state;
// });

// export const TaskReducer = createReducer([], {
//     [ActionTypes.ADD_TODO]: (state, action) => {
//         const text = action.text.trim()
//         return [...state, text]
//     }
// })


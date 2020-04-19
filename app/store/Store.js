import React, { useReducer } from 'react'
import { defaultState } from '../../server/defaultState';

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

export const StoreContext = React.createContext();


export default function Store({ children }) {



    const [state, dispatch] = useReducer(reducer, defaultState)



    return (

        <StoreContext.Provider value={{ getState: () => state, dispatch }}>
            {
                children
            }
        </StoreContext.Provider>


    )
}

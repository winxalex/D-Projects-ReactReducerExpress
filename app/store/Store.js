import React, { useReducer } from 'react'
import { BehaviorSubject } from 'rxjs'
import { useState, useEffect } from 'react'
import { skip } from 'rxjs/operators'

//https://codesandbox.io/s/how-react-should-be-50wp0
// https://github.com/leandrohsilveira/reactjs-hooks-rxjs

export const StoreContext = React.createContext();


export default function Store({ subject, children }) {

    const [state, setState] = useState(subject.getValue())




    useEffect(() => {
        const sub = subject.pipe(skip(1)).subscribe(s => setState(s))
        return () => sub.unsubscribe()
    }, [])

    const dispatch = () => {

    }




    return (

        <StoreContext.Provider value={{ getState: () => state, getSubject: () => subject }}>
            {
                children
            }
        </StoreContext.Provider>


    )
}

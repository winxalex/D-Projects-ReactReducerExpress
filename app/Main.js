import React from 'react'
import Store from '../app/store/Store'
import DashboardConsumer from './components/Dashboard'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import NavigationConsumer from './components/Navigation'
import TaskDetailConsumer from './components/TaskDetail'
import { StateReducer } from './reducers/StateReducer'
import { TaskReducer } from './reducers/TaskReducer'
import { combineReducers } from './reducers/utility'


//const combinedReducer = { ...StateReducer, ...TaskReducer, initialState: { ...TaskReducer.initialState, ...StateReducer.initialState } }
const combinedReducer = combineReducers(StateReducer, TaskReducer);




// const combinedReducer = objCombine(StateReducer, TaskReducer);

//console.log(combinedReducer);

export default function Main() {
    return (
        <div>
            <Router>
                <NavigationConsumer />
                <Store reducer={combinedReducer}>
                    <Route exact
                        path="/dashboard">
                        <DashboardConsumer />
                    </Route>
                    <Route exact path="/task/:id"
                        render={({ match }) => <TaskDetailConsumer match={match} />
                        }
                    />


                </Store>
            </Router>
        </div>
    )
}

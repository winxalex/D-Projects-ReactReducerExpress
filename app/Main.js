import React from 'react'
import Store from '../app/store/Store'
import DashboardConsumer from './components/Dashboard'
import TaskSubject from './reducers/TaskSubject'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import NavigationConsumer from './components/Navigation'
import TaskDetailConsumer from './components/TaskDetail'




export default function Main() {
    return (
        <div>
            <Router>
                <NavigationConsumer />
                <Store subject={TaskSubject}>
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

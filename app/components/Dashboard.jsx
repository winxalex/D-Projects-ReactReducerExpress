import React from 'react'
import { StoreContext } from '../store/Store';
import TaskListConsumer from './TaskList';

export const Dashboard = ({ groups }) => (
    <div>
        <h2>Dashboard</h2>
        {
            groups.map((group) => (
                <TaskListConsumer key={group.id} name={group.name} id={group.id} />
            ))
        }
    </div>
);




export default function DashboardConsumer(props) {
    return (
        <div>
            <StoreContext.Consumer>
                {
                    store => <Dashboard groups={store.getState().groups} />
                }

            </StoreContext.Consumer>

        </div>
    )
}


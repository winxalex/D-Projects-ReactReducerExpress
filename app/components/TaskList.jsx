import React from 'react'
import { StoreContext } from '../store/Store';

export const TaskList = ({ tasks }) => (
    <div>
        {
            tasks.map((task) => (
                <div key={task.id}>{task.name}</div>
            ))
        }
    </div>
);


export default function TaskListConsumer(props) {
    return (
        <div>
            <StoreContext.Consumer>
                {
                    store => <TaskList tasks={
                        store.getState().tasks.filter(
                            task => task.group === props.id
                        )} {...props} />
                }
            </StoreContext.Consumer>
        </div>
    )
}





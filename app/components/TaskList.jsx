import React from 'react'
import { StoreContext } from '../store/Store';
import { Link } from 'react-router-dom';

export const TaskList = ({ tasks, name, id, createTaskItem }) => (
    <div>
        <h3>{name}</h3>
        {
            tasks.map((task) => (
                <Link to={`/task/${task.id}`} >
                    <div key={task.id}>{task.name}</div>
                </Link>

            ))
        }
        <button onClick={() => createTaskItem()} > Add Item</button>
    </div>
);


export default function TaskListConsumer({ group, ...rest }) {



    return (


        <div>
            <StoreContext.Consumer>
                {
                    store => <TaskList tasks={
                        store.getState().tasks.filter(
                            task => task.group === group.id
                        )}
                        createTaskItem={() => store.getSubject().createTask(group)}
                        {...rest} />
                }
            </StoreContext.Consumer>
        </div>
    )
}





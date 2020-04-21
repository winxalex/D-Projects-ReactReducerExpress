import React from 'react'
import { StoreContext } from '../store/Store';
import { Link } from 'react-router-dom';

export const TaskList = ({ tasks, name, id, createTaskItem, test }) => (
    <div>
        <h3>{name}</h3>
        {
            tasks.map((task) => (
                <Link key={task.id} to={`/task/${task.id}`} >
                    <div>{task.name}</div>
                </Link>

            ))
        }
        <button onClick={() => createTaskItem()} > Add Item</button>
        <button onClick={() => test()} > Test</button>
    </div>
);


export default function TaskListConsumer({ group, ...rest }) {

    return (


        <div>
            <StoreContext.Consumer>
                {
                    ({ getState, reducer: { setSession, createTask }, apply }) => <TaskList tasks={
                        getState().tasks.filter(
                            task => task.group === group.id
                        )}
                        createTaskItem={() => apply(createTask, group)}

                        test={() => apply(setSession)

                        }
                        {...rest} />
                }
            </StoreContext.Consumer>
        </div>
    )
}





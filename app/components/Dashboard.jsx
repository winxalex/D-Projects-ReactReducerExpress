import React from 'react'
import { StoreContext } from '../store/Store';
import TaskListConsumer from './TaskList';

//V1 
// this approch makes Dashboard component dirty
// by including connected/consumer component to non connected consumer component
// export const Dashboard = ({ groups }) => (
//     <div>
//         <h2>Dashboard</h2>
//         {
//             groups.map((group) => (
//                 <TaskListConsumer key={group.id} name={group.name} id={group.id} />
//             ))
//         }
//     </div>
// );




// export default function DashboardConsumer(props) {
//     return (
//         <div>
//             <StoreContext.Consumer>
//                 {
//                     store => <Dashboard groups={store.getState().groups} />
//                 }

//             </StoreContext.Consumer>

//         </div>
//     )
// }


//V2
export const Dashboard = ({ groups, component: Component }) => (
    <div>
        <h2>Dashboard</h2>
        {
            groups.map((group) => (
                <Component key={group.id} name={group.name} id={group.id} />
            ))
        }
    </div>
);




export default function DashboardConsumer(props) {
    return (
        <div>
            <StoreContext.Consumer>
                {
                    store => <Dashboard groups={store.getState().groups} component={TaskListConsumer} />
                }

            </StoreContext.Consumer>

        </div>
    )
}


// export default function DashboardConsumer({ consumer: Component, ...props }) {
//     return (
//         <div>
//             <Component>
//                 {
//                     store => <Dashboard groups={store.getState().groups} component={TaskListConsumer} />
//                 }

//             </Component>

//         </div>
//     )
// }


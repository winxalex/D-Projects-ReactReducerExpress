import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";
import { defaultState } from "../../server/defaultState";
import uuid from 'react-uuid'



class TaskSubject extends BehaviorSubject {
    constructor(o) {
        super(o);
    }


    createTask(toGroup) {


        const prevState = this.getValue();

        this.next({
            ...prevState, tasks: [
                ...prevState.tasks, {
                    id: uuid(),
                    name: "New Task",
                    group: toGroup.id,
                    owner: toGroup.ownerID,
                    isComplete: false
                }
            ]
        });

    }
}

// const TaskSubject = {
//     subject: new BehaviorSubject(defaultState),
//     createTask(toGroup) {

//         const prevState = TaskSubject.subject.getValue();

//         TaskSubject.subject.next({
//             ...prevState, tasks: {
//                 ...prevState.tasks,
//                 id: uuid(),
//                 name: "New Task",
//                 group: toGroup.id,
//                 owner: toGroup.ownerID,
//                 isComplete: false
//             }
//         });

//     }
// }


//{


// __sequence: 0,
// __tasks: [],

// tasks: new BehaviorSubject([]),

// add(task) {
//     task.id = taskStore.__sequence++;
//     taskStore.__tasks = [...taskStore.__tasks, task];
//     taskStore.tasks.next(taskStore.__tasks);
// },

// switchDone(id) {
//     taskStore.__tasks = taskStore.__tasks.map(task => {
//         if (task.id === +id) {
//             return {
//                 ...task,
//                 done: !task.done
//             };
//         }
//         return task;
//     });
//     taskStore.tasks.next(taskStore.__tasks);
// },

// remove(id) {
//     taskStore.__tasks = taskStore.__tasks.filter(task => task.id !== +id);
//     taskStore.tasks.next(taskStore.__tasks);
// }
//};

export default new TaskSubject(defaultState);
import { allBooks } from "../../server/books";
import { ajax } from "rxjs/ajax";
import { of } from "rxjs"
import { map, catchError } from "rxjs/operators"
export const StateReducer = {

    initialState: allBooks,

    // setSession() {
    //     console.log("startSession");
    //     return this;
    // }

    // setSession: async function () {
    //     console.log("startSession");
    //     let response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    //     let data = await response.json()

    //     console.log("endSession");
    //     return {
    //         ...this, tasks: [
    //             ...this.tasks, {
    //                 name: "Compile ES6",
    //                 id: "T3",
    //                 group: "G2",
    //                 owner: "U2",
    //                 isComplete: false,
    //             }
    //         ]
    //     }
    // }


    setSession() {


        return ajax.getJSON(`https://api.github.com/users?per_page=5`).pipe(
            map(userResponse => {
                return {
                    ...this, tasks: [
                        ...this.tasks, {
                            name: "Compile ES6",
                            id: "T3",
                            group: "G2",
                            owner: "U2",
                            isComplete: false,
                        }
                    ]
                }
            }

            ),
            catchError(error => {
                console.log('error: ', error);
                return of(error);
            })
        );

        return ajax.getJSON('https://jsonplaceholder.typicode.com/todos/1').pipe(map(v => v
        )

        );


        // return ajax.getJSON('https://jsonplaceholder.typicode.com/todos/1').pipe(
        //     map(userResponse => console.log('users: ', userResponse))
        // ).

        //     catchError(error => {
        //         console.log('error: ', error);
        //         return of(error);
        //     });

    }





    // setSession() {

    //     console.log("start Session");
    //     fetch('https://jsonplaceholder.typicode.com/todos/1')
    //         .then(response => response.json())
    //         .then(json => {
    //             return {
    //                 ...this, tasks: [
    //                     ...this.tasks, {
    //                         name: "Compile ES6",
    //                         id: "T3",
    //                         group: "G2",
    //                         owner: "U2",
    //                         isComplete: false,
    //                     }
    //                 ]
    //             }
    //         }

    //         );


    //     console.log("end Session");
    //     return this;
    // }
}




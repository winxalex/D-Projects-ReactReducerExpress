import { allBooks } from "../../server/books";
import { Observable, BehaviorSubject, combineLatest } from 'rxjs'
import { combineReducers } from "../reducers/utility";



const subscribe = (subscriber) => {
    for (let book of allBooks) {
        subscriber.next(book)
    }
};


//let allBooksObservable$ = new Observable(subscribe);
let allBooksObservable$ = Observable.create(subscribe);

//allBooksObservable$.subscribe(b => console.log(b));

const defaultState = {
    value: "mile"
}


const initialStateOne = {
    name: "Harry",
    city: "London"
}
const initialStateTwo = {
    country: "UK",
    userID: 1001
}

const reducer1 = {
    func1: () => { }
}

const reducer2 = {
    state: null,
    func2: (a, b, c) => {
        return this.state.name;
    }
}

var person = {

    fullName: function (city, country) {
        return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
}
var initialState = {

    firstName: "John",
    lastName: "Doe"

}


var person2 = {

    func2: function () {
        return this.userID + " " + this.session;
    }
}
var initialState2 = {

    userID: "XT2",
    session: "USID-234"

}

//var x = person.fullName.apply(initialState, ["Oslo", "Norway"]);


const m = { ...person, ...person2 };

const dispatch = (f, ...args) => {
    console.log(f.apply(initialState, args));
}

const dispatch2 = (f, ...args) => {
    console.log(f.apply(initialState2, args));
}

dispatch(m.fullName, "Oslo", "Norway");
dispatch2(m.func2);
//console.log(x);

// const m = { ...reducer1, ...reducer2 };
// const dispatch = (f, ...args) => {

//     console.log(f.apply(initialStateOne, args));
//     //console.log(m.func2(3));
// }

//dispatch(m.func2, 2, 3, 4);


// const initialStateOne = {
//     name: "Harry",
//     city: "London"
// }
// const initialStateTwo = {
//     country: "UK",
//     userID: 1001
// }
// const reducerOne = (state, action) => {
//     switch (action.type) {
//         case "ACTION_ONE": return { ...state, name: "Puli" };
//         default: return state;
//     }
// }
// const reducerTwo = (state, action) => {
//     switch (action.type) {
//         case "ACTION_TWO": return { ...state, country: "Germany" };
//         default: return state;
//     }
// }
// const [rootReducerCombined, initialStateCombined] = combineReducers({
//     reducerOne: [reducerOne, initialStateOne],
//     reducertwo: [reducerTwo, initialStateTwo]
// });



//const [state, dispatch] = useReducer(rootReducerCombined, initialStateCombined);

// const a = new BehaviorSubject(defaultState);
// const b = new BehaviorSubject(defaultState);

// const c = combineLatest(a, b);


// c.subscribe(
//     b => console.log(b)
// );

// c.next({ value: "kitic" });


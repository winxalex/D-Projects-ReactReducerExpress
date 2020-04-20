import { allBooks } from "../../server/books";
import { Observable } from 'rxjs'


const subscribe = (subscriber) => {
    for (let book of allBooks) {
        subscriber.next(book)
    }
};


//let allBooksObservable$ = new Observable(subscribe);
let allBooksObservable$ = Observable.create(subscribe);

allBooksObservable$.subscribe(b => console.log(b));
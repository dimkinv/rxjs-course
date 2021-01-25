import { Observable } from "rxjs";

//  sync
const $observable = new Observable(subscriber => {
    subscriber.next(1);
    subscriber.next(2);
    setTimeout(() => { subscriber.next(3) }, 1000);
    subscriber.next(4);
});

$observable.subscribe(number => {
    console.log(number);
});

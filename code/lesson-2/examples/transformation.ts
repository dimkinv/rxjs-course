// map

import { from, interval, observable, range } from "rxjs";
import { map, scan, switchMap } from 'rxjs/operators'

const $observable = from([1, 2, 3, 4, 5, 6, 7, 8, 9]);

$observable.pipe(
    map(value => value * 2)
).subscribe(value => console.log(value));


// scan

// const $observable = from([1, 2, 3, 4, 5, 6, 7, 8, 9]);

// $observable.pipe(
//     scan((acc, value) => acc + value, 0)
// ).subscribe(value => console.log(value));

// switchMap - switch from one observable to another with the result

// const $timer = interval(1000);

// const $observable = $timer.pipe(
//     switchMap(value => range(0, value))
// );

// $observable.subscribe(value => console.log(value))
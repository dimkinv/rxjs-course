// filter

import { from, interval } from "rxjs";
import { distinctUntilChanged, filter, map, takeUntil, throttleTime } from "rxjs/operators";

//  filter
const $observable = from([1, 2, 3, 4, 5, 6, 7, 8, 9]);

$observable.pipe(
    filter(value => value % 2 === 0)
).subscribe(value => console.log(value));

// take until

// const $timer = interval(1000);
// const $check5SecondsPassed = $timer.pipe(
//     filter(value => value === 5)
// );

// $timer.pipe(
//     takeUntil($check5SecondsPassed)
// ).subscribe(value => console.log(value));

// throttleTime

// const $timer = interval(200);
// $timer.pipe(
//     throttleTime(1000)
// ).subscribe(value => console.log(value));

// distinctUntilChanged

// const $timer = interval(200);
// $timer.pipe(
//     map(()=> Math.floor(Math.random() * 10)),
//     // distinctUntilChanged()
// ).subscribe(value => console.log(value));
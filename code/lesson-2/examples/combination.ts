import { concat, from, interval, merge } from "rxjs";

// concat

const $timer = interval(1000);
const $series = from([1,2,3,4,5,6]);

const $combination = concat($series, $timer);

$combination.subscribe(value => console.log(value));

// wrong concat

// const $timer = interval(1000);
// const $series = from([1,2,3,4,5,6]);

// const $combination = concat($timer, $series);

// $combination.subscribe(value => console.log(value));

// merge

// const $timer = interval(1000);
// const $series = from([1,2,3,4,5,6]);

// const $combination = merge($timer, $series);

// $combination.subscribe(value => console.log(value));
import { interval } from "rxjs";


const $timer = interval(1000)

$timer.subscribe(seconds => console.log(`first: ${seconds}`));

setTimeout(() => {
    $timer.subscribe(seconds => console.log(`second: ${seconds}`));
}, 3000);
import { from, of } from "rxjs";

console.log('of ------------------------------------');

const $of = of(1, 2, 3, 4, 5, 6, 7);
$of.subscribe(num => console.log(num));

console.log('from ------------------------------------');

const $fromArray = from([1, 2, 3, 4, 5, 6, 7]);
const $fromMap = from(new Map([['danny', 26], ['koby', 2], ['yossi', 17]]));

$fromArray.subscribe(num => console.log(num));
$fromMap.subscribe(pair => console.log(`${pair[0]} has grade of ${pair[1]}`));

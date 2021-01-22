import { BehaviorSubject, Observable, ReplaySubject, Subject } from "rxjs";

const $observable = new Observable(subscribe => {
    subscribe.next(1);
    subscribe.next(2);
    subscribe.next(3);
    subscribe.next(4);
});

$observable.subscribe(num => console.log(`sub1: ${num}`));

$observable.subscribe(num => console.log(`sub2: ${num}`));

// Subject

console.log('Subject ----------------------------------');

const subject = new Subject();

subject.subscribe(num => console.log(`sub2: ${num}`));

subject.next(1);
subject.next(2);
subject.next(3);
subject.next(4);


subject.subscribe(num => console.log(`sub2: ${num}`));

subject.next(5);
subject.next(6);


console.log('Distributing observable ------------------------------');

const $observable2 = new Observable(subscribe => {
    subscribe.next(1);
    subscribe.next(2);
    subscribe.next(3);
    subscribe.next(4);
});

const $subject2 = new Subject();

$subject2.subscribe(num => console.log(`sub1: ${num}`));

$subject2.subscribe(num => console.log(`sub2: ${num}`));

$observable2.subscribe($subject2);


console.log('RelpaySubject ------------------------------');

const $replaySubject = new ReplaySubject();

$replaySubject.next(1);
$replaySubject.next(2);
$replaySubject.next(3);
$replaySubject.next(4);

$replaySubject.subscribe(num => console.log(`sub1: ${num}`));

$replaySubject.next(5);
$replaySubject.next(6);

$replaySubject.subscribe(num => console.log(`sub2: ${num}`));

console.log('BehaviorSubject ------------------------------');

// note the initial value
const $behaviorSubject = new BehaviorSubject(0);

$behaviorSubject.subscribe(num => console.log(`sub1: ${num}`));

$behaviorSubject.next(1);
$behaviorSubject.next(2);
$behaviorSubject.next(3);

$behaviorSubject.subscribe(num => console.log(`sub2: ${num}`));
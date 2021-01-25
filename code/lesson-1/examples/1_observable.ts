import { Observable, Subscription } from 'rxjs';

//  Creating + Executing
const $observable = new Observable<number>(subscriber => {
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);
});

// Subscribing
$observable.subscribe(number => {
    console.log(number);
});

$observable.subscribe(number => {
    console.log(number);
});

console.log('Complete ------------------------------------------------------')

// Disposing

const $observable2 = new Observable<number>(subscriber => {
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);

    subscriber.complete();

    subscriber.next(4);
});

$observable2.subscribe(number => {
    console.log(number);
});

console.log('Errors ------------------------------------------------------')

// Errors

const $observable3 = new Observable<number>(subscriber => {
    try {
        subscriber.next(1);
        subscriber.next(2);
        throw new Error('test error');
    } catch (error) {
        subscriber.error(error.message);
    }
});

$observable3.subscribe(
    number => {
        console.log(number);
    }, error => {
        console.error(error);
    });

console.log('Unsubscribe ------------------------------------------------------')
// Unsubscribe

const $observable4 = new Observable<number>(subscriber => {
    try {
        subscriber.next(1);
        subscriber.next(2);
        subscriber.next(3);
        setTimeout(() => {
            subscriber.next(4);
        }, 1000);
    } catch (error) {
        subscriber.error(error.message);
    }
});
const subscription = $observable4.subscribe(number => console.log(number));

subscription.unsubscribe();
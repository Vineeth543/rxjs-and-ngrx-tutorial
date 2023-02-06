import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  fromEvent,
  interval,
  Observable,
  Observer,
  Subject,
  Subscription,
} from 'rxjs';
import { UnsubscriberService } from 'src/app/services/unsubscriber.service';

@Component({
  selector: 'app-hot-and-cold-observables',
  templateUrl: './hot-and-cold-observables.component.html',
  styleUrls: ['./hot-and-cold-observables.component.less'],
  providers: [UnsubscriberService],
})
export class HotAndColdObservablesComponent implements OnInit {
  subscription: Subscription[] = new Array<Subscription>();

  observer1: Observer<number> = {
    next: (data: number) => console.log('Observer 1:', data),
    error: (error: any) => console.log('Observer 1:', error),
    complete: () => console.log('Observer 1 completed.'),
  };

  observer2: Observer<number> = {
    next: (data: number) => console.log('Observer 2:', data),
    error: (error: any) => console.log('Observer 2:', error),
    complete: () => console.log('Observer 2 completed.'),
  };

  pointerObserver1: Observer<Event> = {
    next: (data: Event) => console.log((data as PointerEvent).clientX),
    error: (error) => console.warn(error),
    complete: () => console.info('Pointer observer 1 completed.'),
  };

  pointerObserver2: Observer<Event> = {
    next: (data: Event) => console.log((data as PointerEvent).clientX),
    error: (error) => console.warn(error),
    complete: () => console.info('Pointer observer 2 completed.'),
  };

  constructor(private readonly _unsubscriber: UnsubscriberService) {}

  ngOnInit(): void {
    let observable$: Observable<Event> = fromEvent(document, 'click');

    this.subscription.push(
      observable$
        .pipe(this._unsubscriber.takeUntilDestroy)
        .subscribe(this.pointerObserver1)
    );
    this.subscription.push(
      observable$
        .pipe(this._unsubscriber.takeUntilDestroy)
        .subscribe(this.pointerObserver2)
    );
  }

  getColdObservable(): void {
    console.log('\nCold Observable');

    let observable$: Observable<number> = new Observable<number>(
      (observer: Observer<number>) => {
        observer.next(Math.random());
      }
    );

    this.subscription.push(
      observable$
        .pipe(this._unsubscriber.takeUntilDestroy)
        .subscribe(this.observer1)
    );
    this.subscription.push(
      observable$
        .pipe(this._unsubscriber.takeUntilDestroy)
        .subscribe(this.observer2)
    );
  }

  getHotObservable(): void {
    console.log('\nHot Observable');

    let number = Math.random();

    let observable$: Observable<number> = new Observable<number>(
      (observer: Observer<number>) => {
        observer.next(number);
      }
    );

    this.subscription.push(
      observable$
        .pipe(this._unsubscriber.takeUntilDestroy)
        .subscribe(this.observer1)
    );
    this.subscription.push(
      observable$
        .pipe(this._unsubscriber.takeUntilDestroy)
        .subscribe(this.observer2)
    );
  }

  startIntervalByColdObservable(): void {
    console.log('\nInterval using Cold Observable');

    let observable$: Observable<number> = interval(1000);

    this.subscription.push(
      observable$
        .pipe(this._unsubscriber.takeUntilDestroy)
        .subscribe(this.observer1)
    );

    setTimeout(() => {
      this.subscription.push(
        observable$
          .pipe(this._unsubscriber.takeUntilDestroy)
          .subscribe(this.observer2)
      );
    }, 2000);
  }

  startIntervalByHotObservable(): void {
    console.log('\nInterval using Hot Observable');

    let observable$: Observable<number> = interval(1000);

    let subject: Subject<number> = new Subject<number>();

    this.subscription.push(
      subject
        .pipe(this._unsubscriber.takeUntilDestroy)
        .subscribe(this.observer1)
    );

    setTimeout(() => {
      this.subscription.push(
        subject
          .pipe(this._unsubscriber.takeUntilDestroy)
          .subscribe(this.observer2)
      );
    }, 2000);

    this.subscription.push(
      observable$.pipe(this._unsubscriber.takeUntilDestroy).subscribe(subject)
    );
  }

  stopInterval(): void {
    this.subscription.forEach((subscription: Subscription) =>
      subscription.unsubscribe()
    );
  }
}

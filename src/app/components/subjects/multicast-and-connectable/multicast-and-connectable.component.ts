import { Component } from '@angular/core';
import {
  Subject,
  interval,
  Observer,
  multicast,
  connectable,
  Subscription,
  ConnectableObservable,
} from 'rxjs';

@Component({
  selector: 'app-multicast-and-connectable',
  templateUrl: './multicast-and-connectable.component.html',
  styleUrls: ['./multicast-and-connectable.component.less'],
})
export class MulticastAndConnectableComponent {
  subscription: Subscription[] = new Array<Subscription>();

  observer1: Observer<number> = {
    next: (data: number) => console.log('\nObserver 1:', data),
    error: (error) => console.warn(error),
    complete: () => console.info('Observer 1 completed.'),
  };

  observer2: Observer<number> = {
    next: (data: number) => console.log('Observer 2:', data),
    error: (error) => console.warn(error),
    complete: () => console.info('Observer 2 completed.'),
  };

  startIntervalByMulticast(): void {
    let interval$ = interval(1000).pipe(
      multicast(new Subject())
    ) as ConnectableObservable<number>;

    this.subscription.push(interval$.subscribe(this.observer1));

    setTimeout(
      () => this.subscription.push(interval$.subscribe(this.observer2)),
      3000
    );

    interval$.connect();
  }

  startIntervalByConnectable(): void {
    let interval$ = connectable(interval(1000));

    this.subscription.push(interval$.subscribe(this.observer1));

    setTimeout(
      () => this.subscription.push(interval$.subscribe(this.observer2)),
      3000
    );

    interval$.connect();
  }

  stopInterval(): void {
    this.subscription.forEach((subscription: Subscription) =>
      subscription.unsubscribe()
    );
  }
}

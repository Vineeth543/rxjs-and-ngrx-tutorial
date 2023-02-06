import { Component } from '@angular/core';
import {
  Subscription,
  Observer,
  interval,
  multicast,
  Subject,
  ConnectableObservable,
  connectable,
  publish,
  refCount,
  share,
} from 'rxjs';

@Component({
  selector: 'app-publish-refcount-share',
  templateUrl: './publish-refcount-share.component.html',
  styleUrls: ['./publish-refcount-share.component.less'],
})
export class PublishRefcountShareComponent {
  subscription: Subscription[] = new Array<Subscription>();

  observer1 = {
    next: (data: number) => console.log('\nObserver 1:', data),
  };

  observer2 = {
    next: (data: number) => console.log('Observer 2:', data),
  };

  startIntervalByPublish(): void {
    console.log('\nHot Observable using Publish Operator:');

    let interval$ = interval(1000).pipe(
      publish()
    ) as ConnectableObservable<number>;

    this.subscription.push(interval$.subscribe(this.observer1));

    setTimeout(
      () => this.subscription.push(interval$.subscribe(this.observer2)),
      3000
    );

    interval$.connect();
  }

  startIntervalByRefCount(): void {
    console.log('\nHot Observable using RefCount Operator:');

    let interval$ = interval(1000).pipe(publish(), refCount());

    this.subscription.push(interval$.subscribe(this.observer1));

    setTimeout(
      () => this.subscription.push(interval$.subscribe(this.observer2)),
      3000
    );
  }

  startIntervalByShare(): void {
    console.log('\nHot Observable using Share Operator:');

    let interval$ = interval(1000).pipe(share());

    this.subscription.push(interval$.subscribe(this.observer1));

    setTimeout(
      () => this.subscription.push(interval$.subscribe(this.observer2)),
      3000
    );
  }

  stopInterval(): void {
    this.subscription.forEach((subscription: Subscription) =>
      subscription.unsubscribe()
    );
  }
}

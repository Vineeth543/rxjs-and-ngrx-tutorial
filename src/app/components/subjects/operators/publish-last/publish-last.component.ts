import { Component } from '@angular/core';
import {
  interval,
  publishLast,
  connectable,
  Subscription,
  AsyncSubject,
  ConnectableObservable,
  take,
} from 'rxjs';
import { UnsubscriberService } from 'src/app/services/unsubscriber.service';

@Component({
  selector: 'app-publish-last',
  templateUrl: './publish-last.component.html',
  styleUrls: ['./publish-last.component.less'],
  providers: [UnsubscriberService],
})
export class PublishLastComponent {
  subscription: Subscription[] = new Array<Subscription>();

  constructor(private readonly _unsubscriber: UnsubscriberService) {}

  startIntervalByPublishLast(): void {
    const source$ = interval(1000).pipe(
      take(2),
      publishLast()
    ) as ConnectableObservable<number>;
    this.subscription.push(
      source$
        .pipe(this._unsubscriber.takeUntilDestroy)
        .subscribe((data) => console.log('Observer 1:', data))
    );
    setTimeout(() => {
      this.subscription.push(
        source$
          .pipe(this._unsubscriber.takeUntilDestroy)
          .subscribe((data) => console.log('Observer 2:', data))
      );
    }, 4000);
    source$.connect();
  }

  startIntervalByConnectable(): void {
    const source$ = connectable(interval(1000).pipe(take(2)), {
      connector: () => new AsyncSubject(),
    });
    this.subscription.push(
      source$
        .pipe(this._unsubscriber.takeUntilDestroy)
        .subscribe((data) => console.log('Observer 1:', data))
    );
    setTimeout(() => {
      this.subscription.push(
        source$
          .pipe(this._unsubscriber.takeUntilDestroy)
          .subscribe((data) => console.log('Observer 2:', data))
      );
    }, 4000);
    source$.connect();
  }

  stopInterval(): void {
    this.subscription.forEach((subscription: Subscription) =>
      subscription.unsubscribe()
    );
  }
}

import { Component } from '@angular/core';
import {
  interval,
  connectable,
  Subscription,
  publishReplay,
  ReplaySubject,
  ConnectableObservable,
} from 'rxjs';
import { UnsubscriberService } from 'src/app/services/unsubscriber.service';

@Component({
  selector: 'app-publish-replay',
  templateUrl: './publish-replay.component.html',
  styleUrls: ['./publish-replay.component.less'],
  providers: [UnsubscriberService],
})
export class PublishReplayComponent {
  subscription: Subscription[] = new Array<Subscription>();

  constructor(private readonly _unsubscriber: UnsubscriberService) {}

  startIntervalByPublishReplay(): void {
    const source$ = interval(1000).pipe(
      publishReplay()
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
    const source$ = connectable(interval(1000), {
      connector: () => new ReplaySubject(2, 3000),
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

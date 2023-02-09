import { Component } from '@angular/core';
import {
  BehaviorSubject,
  connectable,
  ConnectableObservable,
  interval,
  publishBehavior,
  Subscription,
} from 'rxjs';
import { UnsubscriberService } from 'src/app/services/unsubscriber.service';

@Component({
  selector: 'app-publish-behavior',
  templateUrl: './publish-behavior.component.html',
  styleUrls: ['./publish-behavior.component.less'],
  providers: [UnsubscriberService],
})
export class PublishBehaviorComponent {
  subscription: Subscription[] = new Array<Subscription>();

  constructor(private readonly _unsubscriber: UnsubscriberService) {}

  startIntervalByPublishBehavior(): void {
    const source$ = interval(1000).pipe(
      publishBehavior(-1)
    ) as ConnectableObservable<number>;
    this.subscription.push(
      source$.pipe(this._unsubscriber.takeUntilDestroy).subscribe((data) => {
        console.log('Observer 1:', data);
      })
    );
    setTimeout(() => {
      this.subscription.push(
        source$.pipe(this._unsubscriber.takeUntilDestroy).subscribe((data) => {
          console.log('Observer 2:', data);
        })
      );
    }, 4000);
    source$.connect();
  }

  startIntervalByConnectable(): void {
    const source$ = connectable(interval(1000), {
      connector: () => new BehaviorSubject(-1),
    });
    this.subscription.push(
      source$.pipe(this._unsubscriber.takeUntilDestroy).subscribe((data) => {
        console.log('Observer 1:', data);
      })
    );
    setTimeout(() => {
      this.subscription.push(
        source$.pipe(this._unsubscriber.takeUntilDestroy).subscribe((data) => {
          console.log('Observer 2:', data);
        })
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

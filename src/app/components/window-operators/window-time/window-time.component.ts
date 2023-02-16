import { Component } from '@angular/core';
import {
  Subscription,
  interval,
  mergeMap,
  toArray,
  bufferTime,
  windowTime,
} from 'rxjs';

@Component({
  selector: 'app-window-time',
  templateUrl: './window-time.component.html',
  styleUrls: ['./window-time.component.less'],
})
export class WindowTimeComponent {
  subscription: Subscription[] = new Array<Subscription>();

  startBothInterval(): void {
    this.bufferInterval();
    this.windowInterval();
  }

  bufferInterval(): void {
    console.log('Buffer Time interval started 🚀');
    this.subscription.push(
      interval(500)
        .pipe(bufferTime(2000, 5000))
        .subscribe((data) => console.log('Buffer Time:', data))
    );
  }

  windowInterval(): void {
    console.log('Window Time interval started 🚀');
    this.subscription.push(
      interval(500)
        .pipe(
          windowTime(2000, 5000),
          mergeMap((data) => data.pipe(toArray()))
        )
        .subscribe((data) => console.log('Window Time:', data))
    );
  }

  stopInterval(): void {
    this.subscription.forEach((subscription: Subscription) => {
      subscription.unsubscribe();
    });
    console.log('Intervals stopped 🛑');
  }
}

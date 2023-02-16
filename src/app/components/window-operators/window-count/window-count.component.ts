import { Component } from '@angular/core';
import {
  Subscription,
  interval,
  mergeMap,
  toArray,
  windowCount,
  bufferCount,
} from 'rxjs';

@Component({
  selector: 'app-window-count',
  templateUrl: './window-count.component.html',
  styleUrls: ['./window-count.component.less'],
})
export class WindowCountComponent {
  subscription: Subscription[] = new Array<Subscription>();

  startBothInterval(): void {
    this.bufferInterval();
    this.windowInterval();
  }

  bufferInterval(): void {
    console.log('Buffer Count interval started 🚀');
    this.subscription.push(
      interval(1000)
        .pipe(bufferCount(3, 1))
        .subscribe((data) => console.log('Buffer Count:', data))
    );
  }

  windowInterval(): void {
    console.log('Window Count interval started 🚀');
    this.subscription.push(
      interval(1000)
        .pipe(
          windowCount(3, 1),
          mergeMap((data) => data.pipe(toArray()))
        )
        .subscribe((data) => console.log('Window Count:', data))
    );
  }

  stopInterval(): void {
    this.subscription.forEach((subscription: Subscription) => {
      subscription.unsubscribe();
    });
    console.log('Intervals stopped 🛑');
  }
}

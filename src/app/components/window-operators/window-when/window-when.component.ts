import { Component } from '@angular/core';
import {
  Subscription,
  interval,
  bufferWhen,
  windowWhen,
  mergeMap,
  toArray,
} from 'rxjs';

@Component({
  selector: 'app-window-when',
  templateUrl: './window-when.component.html',
  styleUrls: ['./window-when.component.less'],
})
export class WindowWhenComponent {
  subscription: Subscription[] = new Array<Subscription>();

  startBothInterval(): void {
    this.bufferInterval();
    this.windowInterval();
  }

  bufferInterval(): void {
    console.log('Buffer When interval started 🚀');
    this.subscription.push(
      interval(500)
        .pipe(bufferWhen(() => interval(5000)))
        .subscribe((data) => console.log('Buffer When:', data))
    );
  }

  windowInterval(): void {
    console.log('Window When interval started 🚀');
    this.subscription.push(
      interval(500)
        .pipe(
          windowWhen(() => interval(5000)),
          mergeMap((data) => data.pipe(toArray()))
        )
        .subscribe((data) => console.log('Window When:', data))
    );
  }

  stopInterval(): void {
    this.subscription.forEach((subscription: Subscription) => {
      subscription.unsubscribe();
    });
    console.log('Intervals stopped 🛑');
  }
}

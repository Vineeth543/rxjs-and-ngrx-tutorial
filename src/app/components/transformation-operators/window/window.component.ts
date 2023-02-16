import { Component } from '@angular/core';
import {
  Subscription,
  interval,
  buffer,
  window,
  mergeMap,
  toArray,
} from 'rxjs';

@Component({
  selector: 'app-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.less'],
})
export class WindowComponent {
  subscription: Subscription[] = new Array<Subscription>();

  bufferInterval(): void {
    console.log('Buffer interval started 🚀');
    this.subscription.push(
      interval(1000)
        .pipe(buffer(interval(3000)))
        .subscribe((data) => console.log('Buffer:', data))
    );
  }

  windowInterval(): void {
    console.log('Window interval started 🚀');
    this.subscription.push(
      interval(1000)
        .pipe(
          window(interval(3000)),
          mergeMap((data) => data.pipe(toArray()))
        )
        .subscribe((data) => console.log('Window:', data))
    );
  }

  stopInterval(): void {
    this.subscription.forEach((subscription: Subscription) => {
      subscription.unsubscribe();
    });
    console.log('Intervals stopped 🛑');
  }
}

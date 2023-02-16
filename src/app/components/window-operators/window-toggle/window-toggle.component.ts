import { Component } from '@angular/core';
import {
  Subscription,
  interval,
  bufferToggle,
  windowToggle,
  mergeMap,
  toArray,
} from 'rxjs';

@Component({
  selector: 'app-window-toggle',
  templateUrl: './window-toggle.component.html',
  styleUrls: ['./window-toggle.component.less'],
})
export class WindowToggleComponent {
  subscription: Subscription[] = new Array<Subscription>();

  startBothInterval(): void {
    this.bufferInterval();
    this.windowInterval();
  }

  bufferInterval(): void {
    console.log('Buffer Toggle interval started 🚀');
    this.subscription.push(
      interval(500)
        .pipe(bufferToggle(interval(2000), () => interval(5000)))
        .subscribe((data) => console.log('Buffer Toggle:', data))
    );
  }

  windowInterval(): void {
    console.log('Window Toggle interval started 🚀');
    this.subscription.push(
      interval(500)
        .pipe(
          windowToggle(interval(2000), () => interval(5000)),
          mergeMap((data) => data.pipe(toArray()))
        )
        .subscribe((data) => console.log('Window Toggle:', data))
    );
  }

  stopInterval(): void {
    this.subscription.forEach((subscription: Subscription) => {
      subscription.unsubscribe();
    });
    console.log('Intervals stopped 🛑');
  }
}

import { Component } from '@angular/core';
import { bufferWhen, interval, Subscription, take, tap } from 'rxjs';

@Component({
  selector: 'app-buffer-when',
  templateUrl: './buffer-when.component.html',
  styleUrls: ['./buffer-when.component.less'],
})
export class BufferWhenComponent {
  subscription: Subscription = new Subscription();

  startInterval() {
    let x: number = 0;
    this.subscription = interval(1000)
      .pipe(
        tap((t) => {
          x = t;
          console.log('Tap:', x, t);
        }),
        bufferWhen(() => {
          if (x >= 4) return interval(2000);
          return interval(4000);
        }),
        take(5)
      )
      .subscribe((data) => console.log('Current Data: ', data));
  }

  stopInterval(): void {
    console.log('Stopped Interval.');
    this.subscription.unsubscribe();
  }
}

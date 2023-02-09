import { Component } from '@angular/core';
import { bufferToggle, interval, Subscription, take, tap } from 'rxjs';

@Component({
  selector: 'app-buffer-toggle',
  templateUrl: './buffer-toggle.component.html',
  styleUrls: ['./buffer-toggle.component.less'],
})
export class BufferToggleComponent {
  subscription: Subscription[] = new Array<Subscription>();

  startInterval() {
    let opening = interval(6000).pipe(tap(() => console.log('Opened.')));
    let closing = () => interval(3000).pipe(tap(() => console.log('Closed.')));
    this.subscription.push(
      interval(1000)
        .pipe(
          tap((data) => console.log('Tap: ', data)),
          bufferToggle(opening, closing),
          take(3)
        )
        .subscribe((data) => console.log('Buffer: ', data))
    );
  }

  stopInterval(): void {
    console.log('Stopped Interval.');
    this.subscription.forEach((subscription: Subscription) =>
      subscription.unsubscribe()
    );
  }
}

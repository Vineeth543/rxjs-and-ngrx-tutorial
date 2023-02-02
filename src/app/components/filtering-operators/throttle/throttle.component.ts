import { Component } from '@angular/core';
import { Subscription, interval, tap, throttle } from 'rxjs';

@Component({
  selector: 'app-throttle',
  templateUrl: './throttle.component.html',
  styleUrls: ['./throttle.component.less'],
})
export class ThrottleComponent {
  subscription: Subscription[] = new Array<Subscription>();

  startInterval(): void {
    console.log('Interval Started.');
    this.subscription.push(
      interval(1000)
        .pipe(
          tap((data) => console.log('Tap', data)),
          throttle(() => interval(4000), { leading: true, trailing: true })
        )
        .subscribe((data) => console.log('Throttle', data))
    );
  }

  stopInterval(): void {
    console.log('Interval Stopped');
    this.subscription.forEach((subscription: Subscription) => {
      subscription.unsubscribe();
    });
  }

  ngOnDestroy(): void {
    this.subscription.forEach((subscription: Subscription) => {
      subscription.unsubscribe();
    });
  }
}

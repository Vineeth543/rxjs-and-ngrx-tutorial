import { Component } from '@angular/core';
import { interval, mapTo, Subscription } from 'rxjs';

@Component({
  selector: 'app-map-to',
  templateUrl: './map-to.component.html',
  styleUrls: ['./map-to.component.less'],
})
export class MapToComponent {
  subscription: Subscription = new Subscription();

  startInterval(): void {
    console.log('Interval Started');
    this.subscription = interval(1000)
      .pipe(mapTo('Time'))
      .subscribe({
        next: (data) => console.log(data),
      });
  }

  stopInterval(): void {
    console.log('Interval Stopped');
    this.subscription.unsubscribe();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

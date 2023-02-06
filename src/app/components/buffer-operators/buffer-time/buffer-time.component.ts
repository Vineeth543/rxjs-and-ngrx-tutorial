import { Component } from '@angular/core';
import { bufferTime, interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-buffer-time',
  templateUrl: './buffer-time.component.html',
  styleUrls: ['./buffer-time.component.less'],
})
export class BufferTimeComponent {
  subscription: Subscription = new Subscription();

  startInterval() {
    this.subscription = interval(1000)
      .pipe(bufferTime(2000, 1000))
      .subscribe((data) => console.log(data));
  }

  stopInterval(): void {
    console.log('Stopped Interval.');
    this.subscription.unsubscribe();
  }
}

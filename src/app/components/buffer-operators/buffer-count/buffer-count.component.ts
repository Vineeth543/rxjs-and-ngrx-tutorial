import { Component } from '@angular/core';
import { bufferCount, interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-buffer-count',
  templateUrl: './buffer-count.component.html',
  styleUrls: ['./buffer-count.component.less'],
})
export class BufferCountComponent {
  subscription: Subscription = new Subscription();
  
  startInterval() {
    this.subscription = interval(1000)
      .pipe(bufferCount(3, 2))
      .subscribe((data) => console.log(data));
  }

  stopInterval(): void {
    console.log('Stopped Interval.');
    this.subscription.unsubscribe();
  }
}

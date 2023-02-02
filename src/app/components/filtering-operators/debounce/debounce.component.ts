import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, interval, tap, debounce, fromEvent } from 'rxjs';

@Component({
  selector: 'app-debounce',
  templateUrl: './debounce.component.html',
  styleUrls: ['./debounce.component.less'],
})
export class DebounceComponent implements OnInit, OnDestroy {
  subscription: Subscription[] = new Array<Subscription>();

  ngOnInit(): void {
    fromEvent(document.getElementById('debounce-btn')!, 'click')
      .pipe(debounce(() => interval(1000)))
      .subscribe((data) => {
        console.log(data);
      });
  }

  startInterval(): void {
    console.log('Interval Started.');
    this.subscription.push(
      interval(1000)
        .pipe(
          tap((data) => console.log('Tap', data)),
          debounce(() => interval(1000))
        )
        .subscribe((data) => console.log('Debounce', data))
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

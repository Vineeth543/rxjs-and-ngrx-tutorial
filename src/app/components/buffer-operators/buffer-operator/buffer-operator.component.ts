import { Component, OnInit } from '@angular/core';
import {
  tap,
  buffer,
  interval,
  fromEvent,
  Observable,
  Subscription,
} from 'rxjs';

@Component({
  selector: 'app-buffer-operator',
  templateUrl: './buffer-operator.component.html',
  styleUrls: ['./buffer-operator.component.less'],
})
export class BufferOperatorComponent implements OnInit {
  subscription: Subscription = new Subscription();
  showData$!: Observable<Event>;
  intervalData: number[] = [];

  ngOnInit(): void {
    this.showData$ = fromEvent(document.getElementById('showButton')!, 'click');
  }

  startInterval() {
    this.subscription = interval(1000)
      .pipe(
        tap((data) => console.log('Tap: ', data)),
        buffer(this.showData$)
      )
      .subscribe((data: number[]) => {
        this.intervalData.push(...data);
      });
  }

  stopInterval(): void {
    console.log('Stopped Interval.');
    this.subscription.unsubscribe();
  }
}

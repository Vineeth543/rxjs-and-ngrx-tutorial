import { Component } from '@angular/core';
import {
  Subscription,
  fromEvent,
  interval,
  sample,
  Observable,
  tap,
} from 'rxjs';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.less'],
})
export class SampleComponent {
  subscription: Subscription[] = new Array<Subscription>();
  clickObservable$: Observable<Event> = new Observable();

  ngOnInit(): void {
    this.clickObservable$ = fromEvent(
      document.getElementById('recent-data')!,
      'click'
    );
  }

  startInterval(): void {
    console.log('Interval Started.');
    this.subscription.push(
      interval(1000)
        .pipe(
          tap((data) => console.log('Tap', data)),
          sample(this.clickObservable$)
        )
        .subscribe((data) => console.log('Recent', data))
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

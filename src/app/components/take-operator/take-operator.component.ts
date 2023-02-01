import { Component } from '@angular/core';
import { filter, interval, Subscription, take } from 'rxjs';

@Component({
  selector: 'app-take-operator',
  templateUrl: './take-operator.component.html',
  styleUrls: ['./take-operator.component.less'],
})
export class TakeOperatorComponent {
  subscription: Subscription = new Subscription();

  startInterval(count: number): void {
    console.log('Started');
    this.subscription = interval(1000)
      .pipe(
        filter((x: number) => x > 0),
        take(count)
      )
      .subscribe(
        (data) => console.log(data),
        (error) => console.log(error),
        () => console.log('Completed')
      );
  }

  stopInterval(): void {
    console.log('Stopped Interval.');
    this.subscription.unsubscribe();
  }
}

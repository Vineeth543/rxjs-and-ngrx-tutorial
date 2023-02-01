import { Component } from '@angular/core';
import { filter, interval, map, Subscription } from 'rxjs';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.less'],
})
export class OperatorsComponent {
  subscription: Subscription = new Subscription();

  startInterval(): void {
    const myObservable = interval(500);

    this.subscription = myObservable
      .pipe(
        filter((number) => {
          return number % 2 === 0;
        }),
        map((number) => {
          return 'Even Numbers: ' + number;
        })
      )
      .subscribe((number) => {
        console.log(number);
      });
  }

  stopInterval(): void {
    console.log('Stopped Even Interval.');
    this.subscription.unsubscribe();
  }
}

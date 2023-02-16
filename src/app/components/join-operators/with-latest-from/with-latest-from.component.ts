import { Component } from '@angular/core';
import { Subscription, interval, withLatestFrom } from 'rxjs';

@Component({
  selector: 'app-with-latest-from',
  templateUrl: './with-latest-from.component.html',
  styleUrls: ['./with-latest-from.component.less'],
})
export class WithLatestFromComponent {
  subscription: Subscription = new Subscription();

  startIntervalWithLatestFrom(second: number): void {
    this.subscription = interval(1000)
      .pipe(withLatestFrom(interval(second * 1000)))
      .subscribe({
        next: (data) => console.log(data),
        complete: () => console.info('Done. 👍'),
      });
  }

  stopInterval(): void {
    this.subscription.unsubscribe();
  }
}

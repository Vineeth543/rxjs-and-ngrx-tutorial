import { Component, OnDestroy } from '@angular/core';
import { from, Subscription, takeWhile } from 'rxjs';

@Component({
  selector: 'app-take-while',
  templateUrl: './take-while.component.html',
  styleUrls: ['./take-while.component.less'],
})
export class TakeWhileComponent implements OnDestroy {
  subscription: Subscription = new Subscription();

  startInterval(): void {
    console.log('Started');
    this.subscription = from([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
      .pipe(takeWhile((data: number) => data < 5, true))
      .subscribe({
        next: (data: number) => console.log(data),
        error: (error: string) => console.error('Error: ' + error),
        complete: () => console.info('Completed'),
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

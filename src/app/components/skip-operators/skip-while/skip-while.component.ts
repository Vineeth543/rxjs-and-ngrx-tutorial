import { Component, OnDestroy } from '@angular/core';
import { from, Subscription, skipWhile } from 'rxjs';

@Component({
  selector: 'app-skip-while',
  templateUrl: './skip-while.component.html',
  styleUrls: ['./skip-while.component.less'],
})
export class SkipWhileComponent implements OnDestroy {
  subscription: Subscription = new Subscription();

  startInterval(): void {
    console.log('Started');
    this.subscription = from([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
      .pipe(skipWhile((data: number) => data < 5))
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

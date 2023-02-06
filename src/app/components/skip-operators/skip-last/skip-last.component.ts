import { Component, OnDestroy } from '@angular/core';
import { from, skipLast, Subscription } from 'rxjs';

@Component({
  selector: 'app-skip-last',
  templateUrl: './skip-last.component.html',
  styleUrls: ['./skip-last.component.less'],
})
export class SkipLastComponent implements OnDestroy {
  subscription: Subscription = new Subscription();

  skipValues(count: number): void {
    console.log('Started');
    this.subscription = from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
      .pipe(skipLast(count))
      .subscribe({
        next: (data: number) => console.log(data),
        error: (error) => console.log(error),
        complete: () => console.log('Completed'),
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

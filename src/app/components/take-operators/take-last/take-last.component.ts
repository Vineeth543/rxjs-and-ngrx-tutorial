import { Component, OnDestroy } from '@angular/core';
import { from, Subscription, takeLast } from 'rxjs';

@Component({
  selector: 'app-take-last',
  templateUrl: './take-last.component.html',
  styleUrls: ['./take-last.component.less'],
})
export class TakeLastComponent implements OnDestroy {
  subscription: Subscription = new Subscription();

  startInterval(): void {
    console.log('Started');
    this.subscription = from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
      .pipe(takeLast(5))
      .subscribe({
        next: (data: number) => console.log(data),
        error: (error: string) => console.log('Error: ' + error),
        complete: () => console.log('Completed'),
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

import { Component } from '@angular/core';
import { Subscription, from, tap, single } from 'rxjs';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.less'],
})
export class SingleComponent {
  subscription: Subscription[] = new Array<Subscription>();

  getData(): void {
    this.subscription.push(
      from([1, 2])
        .pipe(
          tap((data) => console.log('Tap', data)),
          single((data) => data % 2 === 0)
        )
        .subscribe({
          next: (data) => console.log('Single', data),
          error: (error) => console.warn(error.name + ': ' + error.message),
          complete: () => console.info('Completed'),
        })
    );
  }

  getError(): void {
    this.subscription.push(
      from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
        .pipe(
          tap((data) => console.log('Tap', data)),
          single()
        )
        .subscribe({
          next: (data) => console.log('Single', data),
          error: (error) => console.warn(error.name + ': ' + error.message),
          complete: () => console.info('Completed'),
        })
    );
  }

  getUndefined(): void {
    this.subscription.push(
      from([1, 2])
        .pipe(
          tap((data) => console.log('Tap', data)),
          single((data) => data > 2)
        )
        .subscribe({
          next: (data) => console.log('Single:', data),
          error: (error) => console.warn(error.name + ': ' + error.message),
          complete: () => console.info('Completed'),
        })
    );
  }

  getNull(): void {
    this.subscription.push(
      from([])
        .pipe(
          tap((data) => console.log('Tap', data)),
          single((data) => data > 2)
        )
        .subscribe({
          next: (data) => console.log('Single:', data),
          error: (error) => console.warn(error.name + ': ' + error.message),
          complete: () => console.info('Completed'),
        })
    );
  }

  ngOnDestroy(): void {
    this.subscription.forEach((subscription: Subscription) => {
      subscription.unsubscribe();
    });
  }
}

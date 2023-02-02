import { Component } from '@angular/core';
import { Subscription, tap, from, first } from 'rxjs';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.less'],
})
export class FirstComponent {
  subscription: Subscription[] = new Array<Subscription>();

  getData(): void {
    this.subscription.push(
      from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
        .pipe(
          tap((data) => console.log('Tap', data)),
          first()
        )
        .subscribe({
          next: (data) => console.log('First', data),
          error: (error) => console.info('Error:', error.message),
          complete: () => console.info('Completed'),
        })
    );

    console.log('\n');

    this.subscription.push(
      from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
        .pipe(
          tap((data) => console.log('Tap', data)),
          first((data) => data / 2 === 50)
        )
        .subscribe({
          next: (data) => console.log('First', data),
          error: (error) => console.error('Error:', error.message),
          complete: () => console.info('Completed'),
        })
    );

    console.log('\n');

    this.subscription.push(
      from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
        .pipe(
          tap((data) => console.log('Tap', data)),
          first((data) => data / 2 === 50, 6)
        )
        .subscribe({
          next: (data) => console.warn('The default data:', data),
          error: (error) => console.info('Error:', error.message),
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

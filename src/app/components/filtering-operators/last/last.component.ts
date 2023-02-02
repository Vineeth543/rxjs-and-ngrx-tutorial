import { Component } from '@angular/core';
import { Subscription, from, tap, last } from 'rxjs';

@Component({
  selector: 'app-last',
  templateUrl: './last.component.html',
  styleUrls: ['./last.component.less'],
})
export class LastComponent {
  subscription: Subscription[] = new Array<Subscription>();

  getData(): void {
    this.subscription.push(
      from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
        .pipe(
          tap((data) => console.log('Tap', data)),
          last()
        )
        .subscribe({
          next: (data) => console.log('Last', data),
          error: (error) => console.info('Error:', error.message),
          complete: () => console.info('Completed'),
        })
    );

    console.log('\n');

    this.subscription.push(
      from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
        .pipe(
          tap((data) => console.log('Tap', data)),
          last((data) => data / 2 === 50)
        )
        .subscribe({
          next: (data) => console.log('Last', data),
          error: (error) => console.error('Error:', error.message),
          complete: () => console.info('Completed'),
        })
    );

    console.log('\n');

    this.subscription.push(
      from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
        .pipe(
          tap((data) => console.log('Tap', data)),
          last((data) => data / 2 === 50, 6)
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

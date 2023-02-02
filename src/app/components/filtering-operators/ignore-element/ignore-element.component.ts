import { Component } from '@angular/core';
import { Subscription, from, tap, ignoreElements } from 'rxjs';

@Component({
  selector: 'app-ignore-element',
  templateUrl: './ignore-element.component.html',
  styleUrls: ['./ignore-element.component.less'],
})
export class IgnoreElementComponent {
  subscription: Subscription[] = new Array<Subscription>();

  getData(): void {
    this.subscription.push(
      from([1, 2, 3, 4, 5])
        .pipe(
          tap((data) => console.log('Tap', data)),
          ignoreElements()
        )
        .subscribe({
          next: (data) => console.log('Data', data),
          error: (error) => console.info('Error:', error.message),
          complete: () => console.info('Ignored Successfully.'),
        })
    );
  }

  ngOnDestroy(): void {
    this.subscription.forEach((subscription: Subscription) => {
      subscription.unsubscribe();
    });
  }
}

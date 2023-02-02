import { Component, OnDestroy } from '@angular/core';
import { Subscription, from, elementAt } from 'rxjs';

@Component({
  selector: 'app-element-at',
  templateUrl: './element-at.component.html',
  styleUrls: ['./element-at.component.less'],
})
export class ElementAtComponent implements OnDestroy {
  subscription: Subscription[] = new Array<Subscription>();

  getData(index: number): void {
    this.subscription.push(
      from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
        .pipe(elementAt(index))
        .subscribe({
          next: (data: number) => console.log(data),
          error: (error) => console.log('Error:', error.message),
          complete: () => console.log('Completed'),
        })
    );
  }

  ngOnDestroy(): void {
    this.subscription.forEach((subscription: Subscription) => {
      subscription.unsubscribe();
    });
  }
}

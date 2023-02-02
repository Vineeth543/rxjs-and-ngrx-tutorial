import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, from, filter, fromEvent } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.less'],
})
export class FilterComponent implements OnInit, OnDestroy {
  subscription: Subscription[] = new Array<Subscription>();

  ngOnInit(): void {
    this.subscription.push(
      fromEvent(document, 'click')
        .pipe(
          filter((event: Event) => {
            return (event.target as HTMLElement).id === 'button-click';
          })
        )
        .subscribe((data) => {
          console.log(data);
        })
    );
  }

  getData(): void {
    this.subscription.push(
      from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
        .pipe(filter((data: number) => data <= 5))
        .subscribe((data: number) => {
          console.log(data);
        })
    );
  }

  ngOnDestroy(): void {
    this.subscription.forEach((subscription: Subscription) => {
      subscription.unsubscribe();
    });
  }
}

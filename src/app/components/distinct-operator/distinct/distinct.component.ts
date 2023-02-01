import { Component, OnDestroy } from '@angular/core';
import { distinct, from, Subscription } from 'rxjs';

@Component({
  selector: 'app-distinct',
  templateUrl: './distinct.component.html',
  styleUrls: ['./distinct.component.less'],
})
export class DistinctComponent implements OnDestroy {
  subscription: Subscription[] = new Array<Subscription>();

  getDistinctData(): void {
    this.subscription.push(
      from([1, 2, 3, 3, 3, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8])
        .pipe(distinct())
        .subscribe((data: number) => {
          console.log(data);
        })
    );

    this.subscription.push(
      from([
        {
          id: 1,
          name: 'Vineeth',
        },
        {
          id: 2,
          name: 'Vineeth',
        },
        {
          id: 3,
          name: 'VINEETH',
        },
        {
          id: 4,
          name: 'vineeth',
        },
      ])
        .pipe(distinct((data) => data.name))
        .subscribe((data) => console.log(data))
    );
  }

  ngOnDestroy(): void {
    this.subscription.forEach((subscription: Subscription) =>
      subscription.unsubscribe()
    );
  }
}

import { Component, OnDestroy } from '@angular/core';
import { distinctUntilChanged, from, Subscription } from 'rxjs';

@Component({
  selector: 'app-distinct-until-changed',
  templateUrl: './distinct-until-changed.component.html',
  styleUrls: ['./distinct-until-changed.component.less'],
})
export class DistinctUntilChangedComponent implements OnDestroy {
  subscription: Subscription[] = new Array<Subscription>();

  getDistinctData(): void {
    this.subscription.push(
      from([1, 1, 2, 2, 1, 1, 2, 2, 1, 1, 2, 2, 1, 1, 2, 2])
        .pipe(distinctUntilChanged())
        .subscribe((data: number) => {
          console.log(data);
        })
    );

    console.log('\n');

    this.subscription.push(
      from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
        .pipe(
          distinctUntilChanged((prev, curr) => {
            return curr === prev + 1;
          })
        )
        .subscribe((data: number) => {
          console.log(data);
        })
    );

    console.log('\n');

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
        .pipe(
          distinctUntilChanged(
            (prev, curr) => {
              return curr === prev;
            },
            (key) => key.name
          )
        )
        .subscribe((data: { id: number; name: string }) => {
          console.log(data);
        })
    );
  }

  ngOnDestroy(): void {
    this.subscription.forEach((subscription: Subscription) =>
      subscription.unsubscribe()
    );
  }
}

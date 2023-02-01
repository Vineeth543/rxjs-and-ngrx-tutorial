import { Component, OnDestroy } from '@angular/core';
import { distinctUntilKeyChanged, from, Subscription } from 'rxjs';

@Component({
  selector: 'app-distinct-until-key-changed',
  templateUrl: './distinct-until-key-changed.component.html',
  styleUrls: ['./distinct-until-key-changed.component.less'],
})
export class DistinctUntilKeyChangedComponent implements OnDestroy {
  subscription: Subscription[] = new Array<Subscription>();

  getDistinctData(): void {
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
          name: 'Vineeth',
        },
        {
          id: 4,
          name: 'Vineeth',
        },
      ])
        .pipe(
          distinctUntilKeyChanged('name', (prev, curr) => {
            return curr.substring(0, 4) === prev.substring(0, 4);
          })
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

import { Component } from '@angular/core';
import {
  of,
  from,
  toArray,
  interval,
  concatMap,
  partition,
  Observable,
  Subscription,
} from 'rxjs';

@Component({
  selector: 'app-partition',
  templateUrl: './partition.component.html',
  styleUrls: ['./partition.component.less'],
})
export class PartitionComponent {
  subscription: Subscription[] = new Array<Subscription>();
  source$: Observable<number> = interval(1000);

  startInterval(): void {
    const [even$, odd$] = partition(this.source$, (value) => value % 2 === 0);
    this.subscription.push(
      even$.subscribe((data) => console.log('Even:', data))
    );
    this.subscription.push(odd$.subscribe((data) => console.log('Odd:', data)));
  }

  stopInterval(): void {
    this.subscription.forEach((subscription: Subscription) =>
      subscription.unsubscribe()
    );
    console.log('Interval Stopped');
  }

  getData(): void {
    const data = partition(
      of(1, 2, 3, 4, 5, 6, 7, 8),
      (value: number) => value % 2 === 1
    );
    from(data)
      .pipe(concatMap((value: Observable<number>) => value.pipe(toArray())))
      .subscribe((data: number[]) => console.log(data));
  }
}

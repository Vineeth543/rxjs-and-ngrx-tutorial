import { Component } from '@angular/core';
import { Subscription, Observable, interval, race, map } from 'rxjs';

@Component({
  selector: 'app-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.less'],
})
export class RaceComponent {
  subscription: Subscription = new Subscription();

  source1$: Observable<string> = interval(1000).pipe(
    map((value: number) => 'First Interval: ' + value)
  );
  source2$: Observable<string> = interval(999).pipe(
    map((value: number) => 'Second Interval: ' + value)
  );
  source3$: Observable<string> = interval(998).pipe(
    map((value: number) => 'Third Interval: ' + value)
  );

  startInterval(): void {
    this.subscription = race(
      this.source1$,
      this.source2$,
      this.source3$
    ).subscribe((data: string) => console.log(data));
  }

  stopInterval(): void {
    this.subscription.unsubscribe();
    console.log('Interval Stopped');
  }
}

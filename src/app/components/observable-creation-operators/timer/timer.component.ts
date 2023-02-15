import { Component } from '@angular/core';
import { concatMap, of, Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.less'],
})
export class TimerComponent {
  subscription: Subscription = new Subscription();

  getData(): void {
    console.log('\nWait for 3 seconds...');

    const data$ = of('a', 'b', 'c', 'd', 'e');

    setTimeout(() => {
      data$.subscribe((data: string) => console.log('Using SetTimeOut:', data));
    }, 3000);

    timer(3000)
      .pipe(concatMap(() => data$))
      .subscribe((data: string) => console.log('Using Timer:', data));
  }

  startTimer(): void {
    this.subscription = timer(0, 1000).subscribe((data: number) =>
      console.log('Timer:', data)
    );
  }

  stopTimer(): void {
    this.subscription.unsubscribe();
    console.log('Timer stopped!');
  }
}

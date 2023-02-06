import { Component, OnDestroy } from '@angular/core';
import { fromEvent, interval, Observable, skipUntil, Subscription } from 'rxjs';

@Component({
  selector: 'app-skip-until',
  templateUrl: './skip-until.component.html',
  styleUrls: ['./skip-until.component.less'],
})
export class SkipUntilComponent implements OnDestroy {
  counterSubscription: Subscription = new Subscription();
  timerSubscription: Subscription = new Subscription();
  buttonEvent: Observable<Event> = new Observable<Event>();

  ngOnInit(): void {
    this.buttonEvent = fromEvent(
      document.getElementById('skip-until')!,
      'click'
    );
  }

  startTimer() {
    console.log('Timer Started');
    this.timerSubscription = interval(1000)
      .pipe(skipUntil(this.buttonEvent))
      .subscribe({
        next: (data: number) => console.log('Timer', data),
        error: (error) => console.error(error),
        complete: () => console.info('Completed'),
      });
  }

  skipValues(count: number): void {
    console.log('Counter Started');
    this.counterSubscription = interval(1000)
      .pipe(skipUntil(interval(count * 1000)))
      .subscribe({
        next: (data: number) => console.log('Counter', data),
        error: (error) => console.error(error),
        complete: () => console.info('Completed'),
      });
  }

  stopTimer(): void {
    this.timerSubscription.unsubscribe();
    console.log('Timer Stopped');
  }

  stopCounter(): void {
    this.counterSubscription.unsubscribe();
    console.log('Counter Stopped');
  }

  ngOnDestroy(): void {
    this.timerSubscription.unsubscribe();
    this.counterSubscription.unsubscribe();
  }
}

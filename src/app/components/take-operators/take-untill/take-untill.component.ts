import { Component, OnDestroy, OnInit } from '@angular/core';
import { fromEvent, interval, Observable, Subscription, takeUntil } from 'rxjs';

@Component({
  selector: 'app-take-untill',
  templateUrl: './take-untill.component.html',
  styleUrls: ['./take-untill.component.less'],
})
export class TakeUntillComponent implements OnInit, OnDestroy {
  subscription: Subscription = new Subscription();
  buttonEvent: Observable<Event> = new Observable<Event>();

  ngOnInit(): void {
    this.buttonEvent = fromEvent(
      document.getElementById('take-until')!,
      'click'
    );
  }

  startTimer() {
    this.subscription = interval(1000)
      .pipe(takeUntil(this.buttonEvent))
      .subscribe({
        next: (data: number) => console.log(data),
        error: (error) => console.error(error),
        complete: () => console.info('Completed'),
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

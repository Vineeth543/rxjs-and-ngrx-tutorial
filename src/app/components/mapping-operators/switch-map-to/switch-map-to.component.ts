import { Component } from '@angular/core';
import { interval, Subscription, switchMapTo, take, tap } from 'rxjs';

@Component({
  selector: 'app-switch-map-to',
  templateUrl: './switch-map-to.component.html',
  styleUrls: ['./switch-map-to.component.less'],
})
export class SwitchMapToComponent {
  subscription: Subscription = new Subscription();

  startInterval(): void {
    this.subscription = interval(500)
      .pipe(
        tap((data) => console.log('Tap:', data)),
        switchMapTo(interval(100)),
        take(10)
      )
      .subscribe({
        next: (data) => console.log('SwitchMapTo:', data),
        error: (error) => console.error(error),
        complete: () => console.info('Completed'),
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

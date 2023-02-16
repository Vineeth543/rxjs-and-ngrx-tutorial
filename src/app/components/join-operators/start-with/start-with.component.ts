import { Component } from '@angular/core';
import { interval, startWith, Subscription } from 'rxjs';

@Component({
  selector: 'app-start-with',
  templateUrl: './start-with.component.html',
  styleUrls: ['./start-with.component.less'],
})
export class StartWithComponent {
  subscription: Subscription = new Subscription();

  startIntervalWithData(data: string): void {
    this.subscription = interval(1000)
      .pipe(startWith(data))
      .subscribe({
        next: (data) => console.log(data),
        complete: () => console.info('Done. 👍'),
      });
  }

  stopInterval(): void {
    this.subscription.unsubscribe();
  }
}

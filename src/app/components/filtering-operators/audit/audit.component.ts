import { Component, OnDestroy } from '@angular/core';
import { Subscription, interval, tap, audit } from 'rxjs';

@Component({
  selector: 'app-audit',
  templateUrl: './audit.component.html',
  styleUrls: ['./audit.component.less'],
})
export class AuditComponent implements OnDestroy {
  subscription: Subscription[] = new Array<Subscription>();

  startInterval(): void {
    console.log('Interval Started.');
    this.subscription.push(
      interval(1000)
        .pipe(
          tap((data) => console.log('Tap', data)),
          audit(() => interval(2000))
        )
        .subscribe((data) => console.log('Audit', data))
    );
  }

  stopInterval(): void {
    console.log('Interval Stopped');
    this.subscription.forEach((subscription: Subscription) => {
      subscription.unsubscribe();
    });
  }

  ngOnDestroy(): void {
    this.subscription.forEach((subscription: Subscription) => {
      subscription.unsubscribe();
    });
  }
}

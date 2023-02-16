import { Component } from '@angular/core';
import { interval, pairwise, Subscription } from 'rxjs';

@Component({
  selector: 'app-pairwise',
  templateUrl: './pairwise.component.html',
  styleUrls: ['./pairwise.component.less'],
})
export class PairwiseComponent {
  subscription: Subscription = new Subscription();

  startInterval(): void {
    console.log('Interval started 🚀');

    this.subscription = interval(1000)
      .pipe(pairwise())
      .subscribe((data) => console.log(data));
  }

  stopInterval(): void {
    this.subscription.unsubscribe();
    console.log('Interval stopped 🛑');
  }
}

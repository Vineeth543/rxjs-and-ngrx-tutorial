import { Component } from '@angular/core';
import { merge, of, queueScheduler, subscribeOn } from 'rxjs';

@Component({
  selector: 'app-subscribe-on',
  templateUrl: './subscribe-on.component.html',
  styleUrls: ['./subscribe-on.component.less'],
})
export class SubscribeOnComponent {
  subscribeOnFun(): void {
    console.log('Function execution started...');

    const source1$ = of('1', '2', '3', '4', '5').pipe(
      // delay
      subscribeOn(queueScheduler, 1)
    );

    const source2$ = of('a', 'b', 'c', 'd', 'e');

    merge(source2$, source1$).subscribe((data) => console.log(data));

    console.log('Function execution ended...');
  }
}

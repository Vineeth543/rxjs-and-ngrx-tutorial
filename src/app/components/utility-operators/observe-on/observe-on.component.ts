import { Component } from '@angular/core';
import { of, map, observeOn, asyncScheduler, subscribeOn } from 'rxjs';

@Component({
  selector: 'app-observe-on',
  templateUrl: './observe-on.component.html',
  styleUrls: ['./observe-on.component.less'],
})
export class ObserveOnComponent {
  observeOnFun(): void {
    console.log('\nObserveOn Function execution started...');

    of(1, 2, 3, 4, 5)
      .pipe(
        map((value) => {
          console.log('Map executing...');
          return value;
        }),
        observeOn(asyncScheduler)
      )
      .subscribe((data) => console.log(data));

    console.log('ObserveOn Function execution ended...');
  }

  subscribeOnFun(): void {
    console.log('\nSubscribeOn Function execution started...');

    of(1, 2, 3, 4, 5)
      .pipe(
        map((value) => {
          console.log('Map executing...');
          return value;
        }),
        subscribeOn(asyncScheduler)
      )
      .subscribe((data) => console.log(data));

    console.log('SubscribeOn Function execution ended...');
  }
}

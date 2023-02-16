import { Component } from '@angular/core';
import { of, map, take, interval, combineLatestAll } from 'rxjs';

@Component({
  selector: 'app-combine-latest-all',
  templateUrl: './combine-latest-all.component.html',
  styleUrls: ['./combine-latest-all.component.less'],
})
export class CombineLatestAllComponent {
  getData(): void {
    of(1, 2, 3)
      .pipe(
        map(() => interval(1000).pipe(take(4))),
        combineLatestAll()
      )
      .subscribe((data) => console.log(data));
  }
}

import { Component } from '@angular/core';
import { filter, interval, map, mergeAll, take, tap } from 'rxjs';

@Component({
  selector: 'app-merge-all',
  templateUrl: './merge-all.component.html',
  styleUrls: ['./merge-all.component.less'],
})
export class MergeAllComponent {
  getData(): void {
    interval(1000)
      .pipe(
        filter((value) => value > 0),
        tap((value) => console.log('Current parent interval:', value)),
        take(5),
        map((value) =>
          interval(500).pipe(
            filter((value) => value > 0),
            map(
              (val) =>
                `Parent interval value: ${value} & Child interval value: ${val}.`
            ),
            take(value)
          )
        ),
        mergeAll()
      )
      .subscribe({
        next: (data) => console.log(data),
        complete: () => console.log('Done. 👍'),
      });
  }
}

import { Component } from '@angular/core';
import { exhaustAll, filter, interval, map, of, take } from 'rxjs';

@Component({
  selector: 'app-exhaust-all',
  templateUrl: './exhaust-all.component.html',
  styleUrls: ['./exhaust-all.component.less'],
})
export class ExhaustAllComponent {
  getData(): void {
    interval(500)
      .pipe(
        filter((value) => value > 0),
        take(10),
        map((value) =>
          interval(500).pipe(
            filter((value) => value > 0),
            take(value),
            map(
              (val) =>
                `Parent interval value: ${value} & Child interval value: ${val}.`
            )
          )
        ),
        exhaustAll()
      )
      .subscribe({
        next: (data) => console.log(data),
        complete: () => console.log('Done. 👍'),
      });
  }
}

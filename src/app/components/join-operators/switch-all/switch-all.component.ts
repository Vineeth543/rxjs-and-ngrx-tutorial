import { Component } from '@angular/core';
import { interval, filter, take, map, switchAll, tap } from 'rxjs';

@Component({
  selector: 'app-switch-all',
  templateUrl: './switch-all.component.html',
  styleUrls: ['./switch-all.component.less'],
})
export class SwitchAllComponent {
  getData(): void {
    interval(1000)
      .pipe(
        filter((value) => value > 0),
        tap((value) => console.log(`Current parent interval: ${value}`)),
        take(10),
        map((value) =>
          interval(500).pipe(
            map(
              (val) =>
                `Parent interval value: ${value} & Child interval value: ${val}.`
            ),
            take(value)
          )
        ),
        switchAll()
      )
      .subscribe({
        next: (data) => console.log(data),
        complete: () => console.log('Done. 👍'),
      });
  }
}

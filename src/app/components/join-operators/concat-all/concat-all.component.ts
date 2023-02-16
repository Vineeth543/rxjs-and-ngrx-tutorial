import { Component } from '@angular/core';
import { of, map, interval, take, concatAll, tap } from 'rxjs';

@Component({
  selector: 'app-concat-all',
  templateUrl: './concat-all.component.html',
  styleUrls: ['./concat-all.component.less'],
})
export class ConcatAllComponent {
  getData(): void {
    of(2, 3, 4)
      .pipe(
        map((value) => interval(500).pipe(take(value))),
        concatAll()
      )
      .subscribe({
        next: (data) => console.log(data),
        complete: () => console.log('Done. 👍'),
      });
  }
}

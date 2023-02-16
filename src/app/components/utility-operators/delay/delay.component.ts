import { Component } from '@angular/core';
import { concatMap, delay, of } from 'rxjs';

@Component({
  selector: 'app-delay',
  templateUrl: './delay.component.html',
  styleUrls: ['./delay.component.less'],
})
export class DelayComponent {
  insertDelay(seconds: number): void {
    console.log('\nPlease wait for', seconds, 'seconds...');

    of(1, 2, 3, 4, 5)
      .pipe(concatMap((data) => of(data).pipe(delay(seconds * 1000))))
      .subscribe({
        next: (data) => console.log(data),
        complete: () => console.log('Done!'),
      });
  }
}

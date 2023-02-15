import { Component } from '@angular/core';
import { every, of } from 'rxjs';

@Component({
  selector: 'app-every',
  templateUrl: './every.component.html',
  styleUrls: ['./every.component.less'],
})
export class EveryComponent {
  checkForEvery(): void {
    let data: string = '';

    const source$ = of(1, 3, 4, 5, 6, 7, 8, 9, 10);

    source$.subscribe((value) => (data += value + ' '));

    console.log('Number Observable:', data);

    console.log('Check if all values are greater than 8:');

    source$
      .pipe(every((val) => val > 8))
      .subscribe((result) => console.log(result));
  }
}

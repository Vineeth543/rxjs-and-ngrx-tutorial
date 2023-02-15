import { Component } from '@angular/core';
import { count, of } from 'rxjs';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.less'],
})
export class CountComponent {
  getCount(): void {
    let data: string = '';

    const source$ = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

    source$.subscribe((value) => (data += value + ' '));

    console.log('Observable:', data);

    source$
      .pipe(count((value, index) => value > index))
      .subscribe((data) => console.log('Count:', data));
  }
}

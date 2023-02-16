import { Component } from '@angular/core';
import { Observable, of, toArray } from 'rxjs';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.less'],
})
export class ToArrayComponent {
  convertToArray(): void {
    const source$: Observable<number> = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

    console.log('\nSource Observable');
    source$.pipe().subscribe((data) => console.log(data));

    source$
      .pipe(toArray())
      .subscribe((data: number[]) =>
        console.log('\nAfter converting to Array:', data)
      );
  }
}
 
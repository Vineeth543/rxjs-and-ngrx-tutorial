import { Component } from '@angular/core';
import { defaultIfEmpty, of } from 'rxjs';

@Component({
  selector: 'app-default-if-empty',
  templateUrl: './default-if-empty.component.html',
  styleUrls: ['./default-if-empty.component.less'],
})
export class DefaultIfEmptyComponent {
  getAllValues(): void {
    let data: string = '';

    const source$ = of(1, 3, 4, 5, 6, 7, 8, 9, 10);

    source$.subscribe((value) => (data += value + ' '));

    console.log('Observable:', data);

    source$.pipe(defaultIfEmpty(40)).subscribe((result) => console.log(result));
  }

  getDefaultValue(): void {
    const source$ = of();

    console.log('Observable: Empty');

    source$
      .pipe(defaultIfEmpty(40))
      .subscribe((result) => console.log('Default Value:', result));
  }
}

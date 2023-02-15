import { Component } from '@angular/core';
import { find, of } from 'rxjs';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.less'],
})
export class FindComponent {
  data: string = '';
  result: string = '';

  source$ = of(10, 2, -9, 0, 5, 3, 1, 4, 20, 7, -8, 90);

  ngOnInit(): void {
    this.source$.subscribe((value) => (this.data += value + ' '));
  }

  findTheIndex(element: number): void {
    this.source$
      .pipe(find((value) => value === element))
      .subscribe((result) =>
        result
          ? (this.result =
              'Hurray! 😀 The Element ' + element + ' is found successfully.')
          : (this.result = 'Sorry.. 🙁 Unable to find the given element.')
      );
  }
}

import { Component, OnInit } from '@angular/core';
import { findIndex, of } from 'rxjs';

@Component({
  selector: 'app-find-index',
  templateUrl: './find-index.component.html',
  styleUrls: ['./find-index.component.less'],
})
export class FindIndexComponent implements OnInit {
  data: string = '';
  result: string = '';

  source$ = of(10, 2, -9, 0, 5, 3, 1, 4, 20, 7, -8, 90);

  ngOnInit(): void {
    this.source$.subscribe((value) => (this.data += value + ' '));
  }

  findTheIndex(element: number): void {
    this.source$
      .pipe(findIndex((value) => value === element))
      .subscribe((result) =>
        result < 0
          ? (this.result = 'The element ' + element + ' is not present.')
          : (this.result =
              'Element ' + element + ' found at index ' + result + '.')
      );
  }
}

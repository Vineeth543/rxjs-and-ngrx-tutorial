import { Component } from '@angular/core';
import { last, of, reduce, scan } from 'rxjs';

@Component({
  selector: 'app-reduce',
  templateUrl: './reduce.component.html',
  styleUrls: ['./reduce.component.less'],
})
export class ReduceComponent {
  source$ = of(1, 2, 3, 4, 5, 6);

  getResultByScan(): void {
    console.log('\nResult by Scan Operator:');

    this.source$
      .pipe(
        scan((acc, curr) => {
          console.log('Accumulator:', acc, '\nCurrent:', curr);
          return acc + curr;
        })
      )
      .subscribe((res) => console.log('Result:', res));
  }

  getResultByScanAndLast(): void {
    console.log('\nResult using Scan with Last Operator:');

    this.source$
      .pipe(
        scan((acc, curr) => {
          console.log('Accumulator:', acc, '\nCurrent:', curr);
          return acc + curr;
        }),
        last()
      )
      .subscribe((res) => console.log('Result:', res));
  }

  getResultByReduce(): void {
    console.log('\nResult by Reduce Operator:');

    this.source$
      .pipe(
        reduce((acc, curr) => {
          console.log('Accumulator:', acc, '\nCurrent:', curr);
          return acc + curr;
        })
      )
      .subscribe((res) => {
        console.log('Result:', res);
      });
  }
}

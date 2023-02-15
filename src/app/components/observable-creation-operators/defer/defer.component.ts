import { Component } from '@angular/core';
import { defer, of } from 'rxjs';

@Component({
  selector: 'app-defer',
  templateUrl: './defer.component.html',
  styleUrls: ['./defer.component.less'],
})
export class DeferComponent {
  createObservable(): void {
    const source$ = defer(() => {
      if (Math.random() < 0.5) {
        return of(0, 1, 2, 3, 4);
      } else {
        return of('a', 'b', 'c', 'd', 'e');
      }
    });
    source$.subscribe((data) => console.log(data));
  }
}

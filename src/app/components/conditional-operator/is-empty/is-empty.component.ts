import { Component } from '@angular/core';
import { count, isEmpty, Observable, Observer, of, tap } from 'rxjs';

@Component({
  selector: 'app-is-empty',
  templateUrl: './is-empty.component.html',
  styleUrls: ['./is-empty.component.less'],
})
export class IsEmptyComponent {
  source$: Observable<number> = new Observable<number>(
    (observer: Observer<number>) => {
      observer.next(1);
      observer.next(2);
      setTimeout(() => {
        observer.next(3);
        observer.complete();
      }, 4000);
    }
  );

  checkForEmpty(): void {
    this.source$
      .pipe(
        tap((val) => console.log('Count Tap:', val)),
        count()
      )
      .subscribe((data) => {
        if (!data) {
          console.log('Count -> The source observable is empty.');
        } else {
          console.log('Count -> The source observable is not empty.');
        }
      });

    this.source$
      .pipe(
        tap((val) => console.log('isEmpty Tap:', val)),
        isEmpty()
      )
      .subscribe((data) => {
        if (data) {
          console.log('isEmpty -> The source observable is empty.');
        } else {
          console.log('isEmpty ->The source observable is not empty.');
        }
      });
  }
}

import { Component } from '@angular/core';
import { Observable, Observer, merge } from 'rxjs';

@Component({
  selector: 'app-merge',
  templateUrl: './merge.component.html',
  styleUrls: ['./merge.component.less'],
})
export class MergeComponent {
  source1$: Observable<string> = new Observable(
    (observer: Observer<string>) => {
      observer.next('Hi from Observer 1.');
      setTimeout(() => {
        observer.next('Hi from Observer 1 after 1 second.');
        observer.complete();
      }, 1000);
    }
  );

  source2$: Observable<string> = new Observable(
    (observer: Observer<string>) => {
      observer.next('Hi from Observer 2.');
      setTimeout(() => {
        observer.next('Hi from Observer 2 after 5 seconds.');
        observer.complete();
      }, 5000);
    }
  );

  source3$: Observable<string> = new Observable(
    (observer: Observer<string>) => {
      observer.next('Hi from Observer 3.');
      observer.complete();
    }
  );

  getData(): void {
    merge(this.source1$, this.source2$, this.source3$).subscribe((data) =>
      console.log(data)
    );
  }
}

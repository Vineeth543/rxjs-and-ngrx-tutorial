import { Component } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';

@Component({
  selector: 'app-combine-latest',
  templateUrl: './combine-latest.component.html',
  styleUrls: ['./combine-latest.component.less'],
})
export class CombineLatestComponent {
  source1$ = new Observable((observer) => {
    observer.next('Hi from Observer 1.');
    setTimeout(() => {
      observer.next('Hi from Observer 1 after 1 second.');
      observer.complete();
    }, 1000);
  });

  source2$ = new Observable((observer) => {
    observer.next('Hi from Observer 2.');
    setTimeout(() => {
      observer.next('Hi from Observer 2 after 5 seconds.');
      observer.complete();
    }, 5000);
  });

  source3$ = new Observable((observer) => {
    observer.next('Hi from Observer 3.');
    observer.complete();
  });

  getData(): void {
    combineLatest([this.source1$, this.source2$, this.source3$]).subscribe(
      (data) => console.log(data)
    );
  }
}

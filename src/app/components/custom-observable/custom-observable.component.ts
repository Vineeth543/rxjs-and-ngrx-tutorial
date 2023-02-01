import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { CustomObserver } from '../../services/Observer';

@Component({
  selector: 'app-custom-observable',
  templateUrl: './custom-observable.component.html',
  styleUrls: ['./custom-observable.component.less'],
})
export class CustomObservableComponent {
  createCustomObservable() {
    const myObservable = new Observable<number>((observer) => {
      for (let i = 1; i <= 5; i++) {
        setTimeout(() => {
          observer.next(i);
          if (i === 5) observer.complete();
        }, i * 1000);
      }
    });

    const observer = {
      next: (data: number) => console.log('Observable 1 ' + data),
      error: (error: string) => console.error('Observable 1 ' + error),
      complete: () => console.log('Mission 1 completed!'),
    };

    myObservable.subscribe(observer);

    myObservable.subscribe({
      next: (data: number) => console.log('Observable 2 ' + data),
      error: (error: string) => console.error('Observable 2 ' + error),
      complete: () => console.log('Mission 2 completed!'),
    });

    myObservable.subscribe(
      (data: number) => console.log('Observable 3 ' + data),
      (error: string) => console.error('Observable 3 ' + error),
      () => console.log('Mission 3 completed!')
    );

    myObservable.subscribe(new CustomObserver());
  }
}

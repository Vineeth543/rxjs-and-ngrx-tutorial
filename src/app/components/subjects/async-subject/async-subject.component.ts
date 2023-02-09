import { Component } from '@angular/core';
import { AsyncSubject } from 'rxjs';

@Component({
  selector: 'app-async-subject',
  templateUrl: './async-subject.component.html',
  styleUrls: ['./async-subject.component.less'],
})
export class AsyncSubjectComponent {
  getAsyncSubjectData() {
    console.log('\nAsync Subject Flow');

    let subject$ = new AsyncSubject();

    subject$.next(1);

    subject$.subscribe((data) => console.log('Observer 1:', data));

    subject$.next(2);
    subject$.next(3);
    subject$.next(4);

    
    setTimeout(() => {
      subject$.subscribe((data) => console.log('Observer 2:', data));
      subject$.next(5);
      subject$.complete();
    }, 3000);
  }
}

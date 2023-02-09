import { Component } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-replay-subject',
  templateUrl: './replay-subject.component.html',
  styleUrls: ['./replay-subject.component.less'],
})
export class ReplaySubjectComponent {
  getReplaySubjectData(): void {
    console.log('\nReplay Subject Flow');

    let subject$ = new ReplaySubject(10, 3010);

    subject$.next(1);

    subject$.subscribe((data) => console.log('Observer 1: ', data));

    subject$.next(2);
    subject$.next(3);
    subject$.next(4);

    setTimeout(() => {
      subject$.subscribe((data) => console.log('Observer 2: ', data));
      subject$.next(5);
    }, 3000);
  }
}

import { Component } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'app-behavior-subject',
  templateUrl: './behavior-subject.component.html',
  styleUrls: ['./behavior-subject.component.less'],
})
export class BehaviorSubjectComponent {
  getNormalSubjectData(): void {
    console.log('\nNormal Subject Flow');

    let subject$ = new Subject();

    subject$.subscribe((data) => console.log('Observer 1: ', data));

    subject$.next(1);

    subject$.subscribe((data) => console.log('Observer 2: ', data));

    subject$.next(2);
  }

  getBehaviorSubjectData(): void {
    console.log('\nBehavior Subject Flow');

    let subject$ = new BehaviorSubject(0);

    subject$.subscribe((data) => console.log('Observer 1: ', data));

    subject$.next(1);

    subject$.subscribe((data) => console.log('Observer 2: ', data));

    subject$.next(2);
  }
}

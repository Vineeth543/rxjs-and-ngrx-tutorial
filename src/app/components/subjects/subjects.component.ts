import { Component } from '@angular/core';
import { Observable, Observer, Subject } from 'rxjs';
import { UnsubscriberService } from 'src/app/services/unsubscriber.service';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.less'],
  providers: [UnsubscriberService],
})
export class SubjectsComponent {
  subject: Subject<number> = new Subject<number>();

  observable$: Observable<number> = new Observable<number>((observer) => {
    observer.next(1);
    observer.next(2);
    observer.next(3);
    observer.complete();
  });

  observer1: Observer<number> = {
    next: (data: number) => console.log('Observer 1: ', data),
    error: (error) => console.warn(error),
    complete: () => console.info('Observer 1 completed.'),
  };

  observer2: Observer<number> = {
    next: (data: number) => console.log('Observer 2: ', data),
    error: (error) => console.warn(error),
    complete: () => console.info('Observer 2 completed.'),
  };

  constructor(private readonly _unsubscriber: UnsubscriberService) {}

  getDatafromObservable() {
    console.log('\nData from normal Observable...');
    this.observable$
      .pipe(this._unsubscriber.takeUntilDestroy)
      .subscribe(this.observer1);
    this.observable$
      .pipe(this._unsubscriber.takeUntilDestroy)
      .subscribe(this.observer2);
  }

  getDatafromSubject() {
    console.log('\nData from Subject...');
    this.subject.subscribe(this.observer1);
    this.subject.subscribe(this.observer2);
    this.observable$.subscribe(this.subject);
    // this.subject.next(101);
    // this.subject.next(102);
    // this.subject.next(103);
    // this.subject.complete();
  }
}

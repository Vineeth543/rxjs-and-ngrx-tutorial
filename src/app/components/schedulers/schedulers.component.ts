import { Component } from '@angular/core';
import {
  merge,
  scheduled,
  asapScheduler,
  asyncScheduler,
  queueScheduler,
} from 'rxjs';

@Component({
  selector: 'app-schedulers',
  templateUrl: './schedulers.component.html',
  styleUrls: ['./schedulers.component.less'],
})
export class SchedulersComponent {
  runScheduler(): void {
    console.log('Schedulers Sterted Execution...');

    let asyncScheduler$ = scheduled(['Async Scheduler'], asyncScheduler);
    let asapScheduler$ = scheduled(['Asap Scheduler'], asapScheduler);
    let queueScheduler$ = scheduled(['Queue Scheduler'], queueScheduler);

    merge(asyncScheduler$, asapScheduler$, queueScheduler$).subscribe(
      (data: string) => console.log(data)
    );

    console.log('Schedulers Ended Execution...');
  }
}

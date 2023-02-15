import { Component } from '@angular/core';
import {
  range,
  observeOn,
  SchedulerLike,
  asapScheduler,
  asyncScheduler,
  queueScheduler,
} from 'rxjs';
import { AsapScheduler } from 'rxjs/internal/scheduler/AsapScheduler';
import { AsyncScheduler } from 'rxjs/internal/scheduler/AsyncScheduler';
import { QueueScheduler } from 'rxjs/internal/scheduler/QueueScheduler';

@Component({
  selector: 'app-range',
  templateUrl: './range.component.html',
  styleUrls: ['./range.component.less'],
})
export class RangeComponent {
  _asyncScheduler: AsyncScheduler = asyncScheduler;
  _asapScheduler: AsapScheduler = asapScheduler;
  _queueScheduler: QueueScheduler = queueScheduler;

  runScheduler(scheduler: SchedulerLike): void {
    console.log(
      'Range Operator Started Execution using',
      scheduler.constructor.name
    );

    range(1, 10)
      .pipe(observeOn(scheduler))
      .subscribe((data) => console.log(data));

    console.log(
      'Range Operator Ended Execution using',
      scheduler.constructor.name
    );
  }
}

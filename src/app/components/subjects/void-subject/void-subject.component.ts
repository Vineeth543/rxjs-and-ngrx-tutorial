import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-void-subject',
  templateUrl: './void-subject.component.html',
  styleUrls: ['./void-subject.component.less'],
})
export class VoidSubjectComponent {
  getVoidSubjectData(): void {
    const subject = new Subject<void>();
    subject.subscribe((data) => console.log('First subscriber:', data));
    subject.subscribe((data) => console.log('Second subscriber:', data));
    subject.next();
  }
}

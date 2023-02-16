import { Component } from '@angular/core';
import { materialize, Observable, Observer, of } from 'rxjs';

@Component({
  selector: 'app-materialize',
  templateUrl: './materialize.component.html',
  styleUrls: ['./materialize.component.less'],
})
export class MaterializeComponent {
  getData(): void {
    new Observable((observer: Observer<number>) => {
      observer.next(1);
      observer.next(2);
      observer.next(3);
      observer.error('Client error');
      observer.complete();
    })
      .pipe(materialize())
      .subscribe({
        next: (data) => console.log(data),
        error: (error) => console.warn(error),
        complete: () => console.info('Data fetched successfully'),
      });
  }
  // getName(): void {
  //   let Employee = { emp: ['John', 'Smith', 'Bob', 'Alice'] };
  //   Employee.constructor.name = 'Employee';
  //   console.log(Employee.constructor);
  // }
}

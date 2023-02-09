import { Component } from '@angular/core';
import { Observable, catchError, retry } from 'rxjs';

@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.less'],
})
export class RetryComponent {
  observable$ = new Observable((observer) => {
    observer.next('Original Data: 1');
    observer.next('Original Data: 2');
    observer.error('Error Occured');
    observer.next('Original Data: 3');
    observer.next('Original Data: 4');
    observer.next('Original Data: 5');
    observer.complete();
  });

  backupObservable$ = new Observable((observer) => {
    observer.next('Backup Data: 3');
    observer.next('Backup Data: 4');
    observer.next('Backup Data: 5');
    observer.complete();
  });

  getData() {
    this.observable$
      .pipe(
        retry(2),
        catchError((error, caught) => {
          console.log('Retry limit reached. Sending backup data...');
          return this.backupObservable$;
        })
      )
      .subscribe({
        next: (data) => console.log(data),
        error: (error) => console.log(error),
        complete: () => console.log('Completed'),
      });
  }
}

import { Component } from '@angular/core';
import { catchError, Observable } from 'rxjs';

@Component({
  selector: 'app-catch-error',
  templateUrl: './catch-error.component.html',
  styleUrls: ['./catch-error.component.less'],
})
export class CatchErrorComponent {
  observable$ = new Observable((observer) => {
    observer.next('Original Data: 1');
    observer.next('Original Data: 2');
    observer.error('Error Occured');
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
        catchError((error, caught) => {
          console.log(error + ': Sending backup data...');
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

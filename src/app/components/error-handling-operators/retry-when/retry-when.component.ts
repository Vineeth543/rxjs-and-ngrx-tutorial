import { Component } from '@angular/core';
import { tap, from, delay, retry, of } from 'rxjs';

@Component({
  selector: 'app-retry-when',
  templateUrl: './retry-when.component.html',
  styleUrls: ['./retry-when.component.less'],
})
export class RetryWhenComponent {
  usersData = {
    responseStatusCode: '500',
    users: [
      { id: 1, name: 'John', age: 25 },
      { id: 2, name: 'Jane', age: 30 },
      { id: 3, name: 'Bob', age: 35 },
      { id: 4, name: 'Alice', age: 40 },
    ],
  };

  getData() {
    let retryCount = 0;
    from(this.usersData.users)
      .pipe(
        delay(1000),
        tap(() => {
          if (!this.usersData.responseStatusCode.startsWith('2'))
            throw of(this.usersData.responseStatusCode);
        }),
        retry({
          delay: (error) => {
            return error.pipe(
              tap(() => {
                retryCount++;
                console.log('Retrying... for ' + retryCount + ' time(s)');
              })
            );
          },
        })
      )
      .subscribe({
        next: (data) => console.log(data),
        error: (error) => console.warn(error),
        complete: () => {
          console.log('Data fetched successfully');
          clearInterval(interval);
        },
      });
    const interval = setInterval(() => {
      if (Math.random() < 0.1) this.usersData.responseStatusCode = '200';
      else this.usersData.responseStatusCode = '500';
    }, 1000);
  }
}

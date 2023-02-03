import { Component } from '@angular/core';
import {
  Subscription,
  of,
  tap,
  switchMap,
  map,
  interval,
  filter,
  take,
} from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.less'],
})
export class SwitchMapComponent {
  subscription: Subscription = new Subscription();

  getMovieData(): void {
    this.subscription = of(
      'bb9b84b7-491d-4143-aa9f-934595e6fc72',
      '5d4cc806-7629-4949-8f23-5deff47be81f',
      '42684064-9662-45b9-bb9b-10783ac61892'
    )
      .pipe(
        tap((data) => console.log('Tap:', data)),
        switchMap((id: string) =>
          ajax(
            `http://ws-21291.netcracker.com:8090/movie-info-management/movie/${id}/Bangalore`
          ).pipe(
            map((data) => {
              console.log('Switch:', id);
              return data.response;
            })
          )
        )
      )
      .subscribe({
        next: (data) => console.log(data),
        error: (error) => console.warn(error),
        complete: () => console.info('Data received successfully'),
      });
  }

  getDataByInterval(): void {
    this.subscription = interval(30)
      .pipe(
        filter((id) => id > 0),
        tap((data) => console.log('Tap:', data)),
        switchMap((id) => {
          return ajax(`https://jsonplaceholder.typicode.com/posts/${id}`).pipe(
            map((data) => {
              console.log('Switch:', id);
              return data.response;
            })
          );
        }),
        take(5)
      )
      .subscribe({
        next: (data) => console.log(data),
        error: (error) => console.warn(error),
        complete: () => console.info('Data received successfully'),
      });
  }

  stopInterval(): void {
    this.subscription.unsubscribe();
    console.info('Interval Stopped');
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

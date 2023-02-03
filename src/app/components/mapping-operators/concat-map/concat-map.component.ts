import { Component } from '@angular/core';
import { Subscription, of, map, concatMap } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-concat-map',
  templateUrl: './concat-map.component.html',
  styleUrls: ['./concat-map.component.less'],
})
export class ConcatMapComponent {
  subscription: Subscription = new Subscription();

  getMovieData(): void {
    this.subscription = of(
      'bb9b84b7-491d-4143-aa9f-934595e6fc72',
      '5d4cc806-7629-4949-8f23-5deff47be81f',
      '42684064-9662-45b9-bb9b-10783ac61892'
    )
      .pipe(
        concatMap((movieId: string) =>
          ajax(
            `http://ws-21291.netcracker.com:8090/movie-info-management/movie/${movieId}/Bangalore`
          ).pipe(
            map((data) => {
              console.log(movieId);
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

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

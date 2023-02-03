import { Subscription, of, mergeMap } from 'rxjs';
import { Component } from '@angular/core';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-merge-map',
  templateUrl: './merge-map.component.html',
  styleUrls: ['./merge-map.component.less'],
})
export class MergeMapComponent {
  subscription: Subscription = new Subscription();

  getMovieData(): void {
    this.subscription = of(
      'bb9b84b7-491d-4143-aa9f-934595e6fc72',
      '5d4cc806-7629-4949-8f23-5deff47be81f',
      '42684064-9662-45b9-bb9b-10783ac61892'
    )
      .pipe(
        mergeMap((movieId: string) => {
          return ajax.getJSON(
            `http://ws-21291.netcracker.com:8090/movie-info-management/movie/${movieId}/Bangalore`
          );
        })
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

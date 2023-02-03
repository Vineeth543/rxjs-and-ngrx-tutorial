import { Component } from '@angular/core';
import { Subscription, of, concatMapTo, map } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-concat-map-to',
  templateUrl: './concat-map-to.component.html',
  styleUrls: ['./concat-map-to.component.less'],
})
export class ConcatMapToComponent {
  subscription: Subscription = new Subscription();

  getMovieData(): void {
    this.subscription = of(
      'bb9b84b7-491d-4143-aa9f-934595e6fc72',
      '5d4cc806-7629-4949-8f23-5deff47be81f',
      '42684064-9662-45b9-bb9b-10783ac61892'
    )
      .pipe(
        concatMapTo(
          ajax(
            `http://ws-21291.netcracker.com:8090/movie-info-management/movie/bb9b84b7-491d-4143-aa9f-934595e6fc72/Bangalore`
          ).pipe(
            map((data: any) => {
              return data.response.title;
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

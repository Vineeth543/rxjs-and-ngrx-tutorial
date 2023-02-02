import { Component } from '@angular/core';
import { map, Subscription } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-ajax',
  templateUrl: './ajax.component.html',
  styleUrls: ['./ajax.component.less'],
})
export class AjaxComponent {
  subscription: Subscription[] = new Array<Subscription>();

  getData(): void {
    console.log('Normal Ajax Response');
    ajax(
      `http://ws-21291.netcracker.com:8090/movie-info-management/movie`
    ).subscribe({
      next: (data) => console.log(data),
      error: (error) => console.warn(error),
      complete: () => console.info('Completed'),
    });
  }

  getDataByMap(): void {
    console.log('Modified response using Map');
    ajax(`http://ws-21291.netcracker.com:8090/movie-info-management/movie`)
      .pipe(
        map((response) => {
          let data = [];
          for (let item of response.response as { title: string }[]) {
            data.push(item.title);
          }
          return data;
        })
      )
      .subscribe({
        next: (data) => console.log(data),
        error: (error) => console.warn(error),
        complete: () => console.info('Completed'),
      });
  }

  getDataByAjaxJson(): void {
    console.log('Response by Ajax JSON');
    ajax
      .getJSON(
        `http://ws-21291.netcracker.com:8090/movie-info-management/movie`
      )
      .subscribe({
        next: (data) => console.log(data),
        error: (error) => console.warn(error),
        complete: () => console.info('Completed'),
      });
  }

  getDataUsingPost(): void {
    console.log('Response by POST method');
    ajax({
      url: `http://ws-21291.netcracker.com:8090/movie-info-management/movie`,
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        vineeth: 'vineeth.serigar@netcracker.com',
      },
      body: {
        title: 'Vineeth Serigar',
      },
    }).subscribe({
      next: (data) => console.log(data),
    });
  }
}

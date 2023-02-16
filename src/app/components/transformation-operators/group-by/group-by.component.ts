import { Component } from '@angular/core';
import { from, groupBy, mergeMap, reduce } from 'rxjs';

@Component({
  selector: 'app-group-by',
  templateUrl: './group-by.component.html',
  styleUrls: ['./group-by.component.less'],
})
export class GroupByComponent {
  groupData(): void {
    const data = [
      { id: 1, views: 20, likes: 10, comments: 2 },
      { id: 1, views: 24, likes: 11, comments: 6 },
      { id: 2, views: 30, likes: 15, comments: 2 },
      { id: 2, views: 34, likes: 16, comments: 4 },
      { id: 3, views: 40, likes: 20, comments: 2 },
      { id: 3, views: 44, likes: 21, comments: 6 },
    ];

    from(data)
      .pipe(
        groupBy((data) => data.id),
        mergeMap((data) =>
          data.pipe(
            reduce(
              (acc, cur) => {
                acc.id = acc.id || cur.id;
                acc.views += cur.views;
                acc.likes += cur.likes;
                acc.comments += cur.comments;
                return acc;
              },
              { id: 0, views: 0, likes: 0, comments: 0 }
            )
          )
        )
      )
      .subscribe((data) => console.log(data));
  }
}

import { Component } from '@angular/core';
import { dematerialize, from, ObservableNotification } from 'rxjs';

@Component({
  selector: 'app-de-materialize',
  templateUrl: './de-materialize.component.html',
  styleUrls: ['./de-materialize.component.less'],
})
export class DeMaterializeComponent {
  getData(): void {
    const source$: ObservableNotification<number>[] = [];

    for (let i = 1; i <= 10; i++) {
      source$.push({
        kind: 'N',
        value: i,
      });
    }

    console.log('\nWithout dematerialize:');
    from(source$).subscribe((data) => console.log(data));

    console.log('\nWith dematerialize:');
    from(source$)
      .pipe(dematerialize())
      .subscribe((data) => console.log(data));
  }
}

import { Component } from '@angular/core';
import { of, min } from 'rxjs';

@Component({
  selector: 'app-min',
  templateUrl: './min.component.html',
  styleUrls: ['./min.component.less'],
})
export class MinComponent {
  getMin(): void {
    let data: string = '';

    const source1$ = of(99, -80, 0, 1, 9999, 100, -1000);

    source1$.subscribe((value) => (data += value + ' '));

    console.log('\nNumber Observable:', data);

    source1$.pipe(min()).subscribe((data) => console.log('Min:', data));

    const source2$ = of(
      { name: 'Mary', age: 32, role: 'Engineer' },
      { name: 'John', age: 30, role: 'Developer' },
      { name: 'Bob', age: 25, role: 'Tester' },
      { name: 'Peter', age: 28, role: 'Designer' }
    );

    console.log('\nEmployee Observable:');

    source2$.subscribe((value) => console.log(value));

    source2$
      .pipe(min((prevPerson, currPerson) => prevPerson.age - currPerson.age))
      .subscribe((data) => console.log('\nJunior Employee:', data));
  }
}

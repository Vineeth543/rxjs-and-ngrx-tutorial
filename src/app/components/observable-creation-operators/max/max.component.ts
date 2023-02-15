import { Component } from '@angular/core';
import { of, max } from 'rxjs';

@Component({
  selector: 'app-max',
  templateUrl: './max.component.html',
  styleUrls: ['./max.component.less'],
})
export class MaxComponent {
  getMax(): void {
    let data: string = '';

    const source1$ = of(99, -80, 0, 1, 9999, 100, -1000);

    source1$.subscribe((value) => (data += value + ' '));

    console.log('\nNumber Observable:', data);

    source1$.pipe(max()).subscribe((data) => console.log('Max:', data));

    const source2$ = of(
      { name: 'Bob', age: 25, role: 'Tester' },
      { name: 'Mary', age: 32, role: 'Engineer' },
      { name: 'John', age: 30, role: 'Developer' },
      { name: 'Peter', age: 28, role: 'Designer' }
    );

    console.log('\nEmployee Observable:');

    source2$.subscribe((value) => console.log(value));

    source2$
      .pipe(max((prevPerson, currPerson) => prevPerson.age - currPerson.age))
      .subscribe((data) => console.log('\nSenior Employee:', data));
  }
}

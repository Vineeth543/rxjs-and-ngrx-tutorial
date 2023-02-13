import { Component } from '@angular/core';
import { of, zip } from 'rxjs';

@Component({
  selector: 'app-zip',
  templateUrl: './zip.component.html',
  styleUrls: ['./zip.component.less'],
})
export class ZipComponent {
  age$ = of(25, 30, 28, 27, 24);
  zipCode$ = of(10001, 20002, 30003, 40004, 50005);
  lastName$ = of('Doe', 'Clint', 'Tony', 'Gill', 'Perry');
  firstName$ = of('John', 'Jane', 'Jack', 'Jill', 'Amanda');
  address$ = of('New York', 'London', 'Paris', 'Berlin', 'Sydney');

  getData(): void {
    zip(
      this.firstName$,
      this.lastName$,
      this.age$,
      this.address$,
      this.zipCode$,
      (firstName, lastName, age, address, zipCode) => {
        return {
          FirstName: firstName,
          LastName: lastName,
          Age: age,
          Address: address,
          ZipCode: zipCode,
        };
      }
    ).subscribe((data) => console.log(data));
  }
}

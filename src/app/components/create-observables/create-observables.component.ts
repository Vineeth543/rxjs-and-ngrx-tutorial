import { Component } from '@angular/core';
import { fromEvent, from } from 'rxjs';
import { MyFunction, MyObservable } from '../../services/FunctionAndObservable';

@Component({
  selector: 'app-create-observables',
  templateUrl: './create-observables.component.html',
  styleUrls: ['./create-observables.component.less'],
})
export class CreateObservablesComponent {
  booksArray = [
    {
      title: 'The Awakening 1',
      description: "Kate Chopin's novel of an adulterous",
    },
    {
      title: 'The Awakening 2 ',
      description: "Kate Chopin's novel of an adulterous",
    },
    {
      title: 'The Awakening 3',
      description: "Kate Chopin's novel of an adulterous",
    },
  ];

  booksArrayObservable$ = from(this.booksArray);

  ngOnInit(): void {
    fromEvent(document.getElementById('click-btn')!, 'click').subscribe({
      next: (data) => console.log(data),
      error: (error) => console.error(error),
      complete: () => console.log('Promise Observable completed'),
    });
  }

  booksObservables() {
    this.booksArrayObservable$.subscribe({
      next: (data) => console.log(data),
      error: (error) => console.error(error),
      complete: () => console.log('Books Observable completed'),
    });
  }

  promiseObservables() {
    console.log('Promise Observable Started');

    let promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Promise resolved');
      }, 3000);
    });

    let promiseObservable$ = from(promise);

    promiseObservable$.subscribe({
      next: (data) => console.log(data),
      error: (error) => console.error(error),
      complete: () => console.log('Promise Observable Completed'),
    });
  }

  functionAndObservables() {
    console.log('\n');
    console.log('************** Function Started **************');
    console.log(MyFunction());
    console.log('************** Function Ended **************');

    console.log('\n');

    console.log('************** Observable Started **************');
    MyObservable.subscribe((data) => console.log(data));
    console.log('************** Observable Ended **************');
    console.log('\n');
  }
}

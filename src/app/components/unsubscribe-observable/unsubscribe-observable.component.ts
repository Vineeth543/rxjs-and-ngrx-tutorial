import { Component } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-unsubscribe-observable',
  templateUrl: './unsubscribe-observable.component.html',
  styleUrls: ['./unsubscribe-observable.component.less'],
})
export class UnsubscribeObservableComponent {
  subscription: Subscription = new Subscription();

  subscribe() {
    const myObservable = interval(1000);

    this.subscription = myObservable.subscribe((data) => {
      console.log(new Date().toLocaleString() + ' ' + data);
    });
  }

  unsubscribe() {
    console.log('Unsubscribed successfully');
    this.subscription.unsubscribe();
  }
}

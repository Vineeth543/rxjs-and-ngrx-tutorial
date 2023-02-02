import { Component, OnDestroy, OnInit } from '@angular/core';
import { fromEvent, map, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-map-operator',
  templateUrl: './map-operator.component.html',
  styleUrls: ['./map-operator.component.less'],
})
export class MapOperatorComponent implements OnInit, OnDestroy {
  subscription: Subscription = new Subscription();
  clickEvent: Observable<Event> = new Observable<Event>();

  ngOnInit(): void {
    this.clickEvent = fromEvent(
      document.getElementById('map-button')!,
      'click'
    );

    this.subscription = this.clickEvent
      .pipe(
        map((event: Event) => {
          return {
            x: (event as PointerEvent).clientX,
            y: (event as PointerEvent).clientY,
          };
        })
      )
      .subscribe({
        next: (data) => console.log(data),
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

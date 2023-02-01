import { Observer } from 'rxjs';

export class CustomObserver implements Observer<number> {
  next(data: number) {
    console.log('Observable 4 ' + data);
  }
  error(error: string) {
    console.error('Observable 4 ' + error);
  }
  complete() {
    console.log('Mission 4 completed!');
  }
}

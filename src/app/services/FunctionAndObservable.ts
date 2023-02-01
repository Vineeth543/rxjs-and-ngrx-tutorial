import { Observable } from 'rxjs';

export function MyFunction() {
  console.log('Hello from function');
  setTimeout(() => {
    return "Function's Set Timeout.";
  });
  return '1';
  return '2'; // Dead code
}

export const MyObservable = new Observable((observer) => {
  console.log('Hello from Observable');
  observer.next('1');
  observer.next('2');
  setTimeout(() => {
    observer.next("\nObservable's Set Timeout\n");
  });
});

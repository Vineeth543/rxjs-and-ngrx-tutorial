import { Component } from '@angular/core';
import { queueScheduler } from 'rxjs';
import { generate, GenerateOptions } from 'rxjs/internal/observable/generate';

@Component({
  selector: 'app-generate',
  templateUrl: './generate.component.html',
  styleUrls: ['./generate.component.less'],
})
export class GenerateComponent {
  getData(): void {
    console.log('Generate Operator Started Execution');

    const generateOptions: GenerateOptions<number, number> = {
      initialState: 1,
      condition: (x) => x < 10,
      iterate: (x) => x + 1,
      resultSelector: (x) => x * x,
      scheduler: queueScheduler,
    };

    generate(generateOptions).subscribe((data: number) => console.log(data));

    console.log('Generate Operator Ended Execution');
  }
}

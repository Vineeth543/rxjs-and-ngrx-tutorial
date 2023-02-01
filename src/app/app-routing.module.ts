import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OperatorsComponent } from './components/operators/operators.component';
import { BufferTimeComponent } from './components/buffer-time/buffer-time.component';
import { BufferCountComponent } from './components/buffer-count/buffer-count.component';
import { BufferToggleComponent } from './components/buffer-toggle/buffer-toggle.component';
import { BufferOperatorComponent } from './components/buffer-operator/buffer-operator.component';
import { CustomObservableComponent } from './components/custom-observable/custom-observable.component';
import { CreateObservablesComponent } from './components/create-observables/create-observables.component';
import { UnsubscribeObservableComponent } from './components/unsubscribe-observable/unsubscribe-observable.component';
import { BufferWhenComponent } from './components/buffer-when/buffer-when.component';
import { TakeOperatorComponent } from './components/take-operator/take-operator.component';
import { TakeLastComponent } from './components/take-last/take-last.component';
import { TakeUntillComponent } from './components/take-untill/take-untill.component';
import { TakeWhileComponent } from './components/take-while/take-while.component';
import { SkipOperatorComponent } from './components/skip-operator/skip-operator.component';
import { SkipLastComponent } from './components/skip-last/skip-last.component';
import { SkipUntilComponent } from './components/skip-until/skip-until.component';
import { SkipWhileComponent } from './components/skip-while/skip-while.component';

const routes: Routes = [
  {
    path: '',
    component: CreateObservablesComponent,
  },
  {
    path: 'custom-observables',
    component: CustomObservableComponent,
  },
  {
    path: 'unsubscribe-observables',
    component: UnsubscribeObservableComponent,
  },
  {
    path: 'operators',
    component: OperatorsComponent,
    children: [
      { path: 'take', component: TakeOperatorComponent },
      { path: 'skip', component: SkipOperatorComponent },
      { path: 'skip-last', component: SkipLastComponent },
      { path: 'skip-until', component: SkipUntilComponent },
      { path: 'take-last', component: TakeLastComponent },
      { path: 'take-while', component: TakeWhileComponent },
      { path: 'buffer', component: BufferOperatorComponent },
      { path: 'buffer-time', component: BufferTimeComponent },
      { path: 'buffer-when', component: BufferWhenComponent },
      { path: 'take-untill', component: TakeUntillComponent },
      { path: 'buffer-count', component: BufferCountComponent },
      { path: 'buffer-toggle', component: BufferToggleComponent },
      { path: 'skip-while', component: SkipWhileComponent },
    ],
  },
];

export const routingComponents = [
  TakeLastComponent,
  SkipLastComponent,
  OperatorsComponent,
  TakeWhileComponent,
  BufferWhenComponent,
  TakeUntillComponent,
  BufferCountComponent,
  BufferToggleComponent,
  SkipOperatorComponent,
  TakeOperatorComponent,
  BufferOperatorComponent,
  CustomObservableComponent,
  CreateObservablesComponent,
  UnsubscribeObservableComponent,
  SkipUntilComponent,
  SkipWhileComponent,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

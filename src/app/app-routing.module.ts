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
import { DistinctOperatorsComponent } from './components/distinct-operator/distinct-operators/distinct-operators.component';
import { DistinctComponent } from './components/distinct-operator/distinct/distinct.component';
import { DistinctUntilChangedComponent } from './components/distinct-operator/distinct-until-changed/distinct-until-changed.component';
import { DistinctUntilKeyChangedComponent } from './components/distinct-operator/distinct-until-key-changed/distinct-until-key-changed.component';
import { FilterOperatorsComponent } from './components/filtering-operators/filter-operators/filter-operators.component';
import { FilterComponent } from './components/filtering-operators/filter/filter.component';
import { SampleComponent } from './components/filtering-operators/sample/sample.component';
import { AuditComponent } from './components/filtering-operators/audit/audit.component';
import { ThrottleComponent } from './components/filtering-operators/throttle/throttle.component';
import { FirstComponent } from './components/filtering-operators/first/first.component';
import { LastComponent } from './components/filtering-operators/last/last.component';
import { DebounceComponent } from './components/filtering-operators/debounce/debounce.component';
import { ElementAtComponent } from './components/filtering-operators/element-at/element-at.component';
import { IgnoreElementComponent } from './components/filtering-operators/ignore-element/ignore-element.component';
import { SingleComponent } from './components/filtering-operators/single/single.component';
import { MapOperatorComponent } from './components/transformation-operators/map-operator/map-operator.component';
import { TransformationOperatorsComponent } from './components/transformation-operators/operators/operators.component';
import { MapToComponent } from './components/transformation-operators/map-to/map-to.component';
import { AjaxComponent } from './components/creation-operators/ajax/ajax.component';
import { CreationOperatorsComponent } from './components/creation-operators/operators/operators.component';
import { MappingOperatorsComponent } from './components/mapping-operators/operators/operators.component';
import { MergeMapComponent } from './components/mapping-operators/merge-map/merge-map.component';
import { MergeMapToComponent } from './components/mapping-operators/merge-map-to/merge-map-to.component';
import { ConcatMapComponent } from './components/mapping-operators/concat-map/concat-map.component';
import { ConcatMapToComponent } from './components/mapping-operators/concat-map-to/concat-map-to.component';
import { ExhaustMapComponent } from './components/mapping-operators/exhaust-map/exhaust-map.component';
import { SwitchMapComponent } from './components/mapping-operators/switch-map/switch-map.component';
import { SwitchMapToComponent } from './components/mapping-operators/switch-map-to/switch-map-to.component';

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
      {
        path: 'distinct-operators',
        component: DistinctOperatorsComponent,
        children: [
          { path: 'distinct', component: DistinctComponent },
          {
            path: 'distinct-until-changed',
            component: DistinctUntilChangedComponent,
          },
          {
            path: 'distinct-until-key-changed',
            component: DistinctUntilKeyChangedComponent,
          },
        ],
      },
      {
        path: 'filter-operators',
        component: FilterOperatorsComponent,
        children: [
          { path: 'filter', component: FilterComponent },
          { path: 'sample', component: SampleComponent },
          { path: 'audit', component: AuditComponent },
          { path: 'throttle', component: ThrottleComponent },
          { path: 'first', component: FirstComponent },
          { path: 'last', component: LastComponent },
          { path: 'debounce', component: DebounceComponent },
          { path: 'element-at', component: ElementAtComponent },
          { path: 'ignore', component: IgnoreElementComponent },
          { path: 'single', component: SingleComponent },
        ],
      },
      {
        path: 'transformation-operators',
        component: TransformationOperatorsComponent,
        children: [
          { path: 'map', component: MapOperatorComponent },
          { path: 'map-to', component: MapToComponent },
        ],
      },
      {
        path: 'creation-operators',
        component: CreationOperatorsComponent,
        children: [
          { path: 'ajax', component: AjaxComponent },
          { path: 'map-to', component: MapToComponent },
        ],
      },
      {
        path: 'mapping-operators',
        component: MappingOperatorsComponent,
        children: [
          { path: 'merge-map', component: MergeMapComponent },
          { path: 'merge-map-to', component: MergeMapToComponent },
          { path: 'concat-map', component: ConcatMapComponent },
          { path: 'concat-map-to', component: ConcatMapToComponent },
          { path: 'exhaust-map', component: ExhaustMapComponent },
          { path: 'switch-map', component: SwitchMapComponent },
          { path: 'switch-map-to', component: SwitchMapToComponent },
        ],
      },
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
  DistinctOperatorsComponent,
  DistinctComponent,
  DistinctUntilChangedComponent,
  DistinctUntilKeyChangedComponent,
  FilterOperatorsComponent,
  FilterComponent,
  SampleComponent,
  AuditComponent,
  ThrottleComponent,
  FirstComponent,
  LastComponent,
  DebounceComponent,
  ElementAtComponent,
  IgnoreElementComponent,
  SingleComponent,
  TransformationOperatorsComponent,
  MapOperatorComponent,
  MapToComponent,
  CreationOperatorsComponent,
  AjaxComponent,
  MappingOperatorsComponent,
  MergeMapComponent,
  MergeMapToComponent,
  ConcatMapComponent,
  ConcatMapToComponent,
  ExhaustMapComponent,
  SwitchMapComponent,
  SwitchMapToComponent,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

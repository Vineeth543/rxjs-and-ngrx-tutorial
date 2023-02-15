import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ObservablesComponent } from './components/observables/observables.component';
import { CustomObservableComponent } from './components/observables/custom-observable/custom-observable.component';
import { CreateObservablesComponent } from './components/observables/create-observables/create-observables.component';
import { UnsubscribeObservableComponent } from './components/observables/unsubscribe-observable/unsubscribe-observable.component';

import { OperatorsComponent } from './components/operators/operators.component';
import { BufferWhenComponent } from './components/buffer-operators/buffer-when/buffer-when.component';
import { BufferTimeComponent } from './components/buffer-operators/buffer-time/buffer-time.component';
import { BufferOperatorsComponent } from './components/buffer-operators/operators/operators.component';
import { BufferCountComponent } from './components/buffer-operators/buffer-count/buffer-count.component';
import { BufferToggleComponent } from './components/buffer-operators/buffer-toggle/buffer-toggle.component';
import { BufferOperatorComponent } from './components/buffer-operators/buffer-operator/buffer-operator.component';

import { TakeLastComponent } from './components/take-operators/take-last/take-last.component';
import { TakeWhileComponent } from './components/take-operators/take-while/take-while.component';
import { TakeOperatorsComponent } from './components/take-operators/operators/operators.component';
import { TakeUntillComponent } from './components/take-operators/take-untill/take-untill.component';
import { TakeOperatorComponent } from './components/take-operators/take-operator/take-operator.component';

import { SkipLastComponent } from './components/skip-operators/skip-last/skip-last.component';
import { SkipUntilComponent } from './components/skip-operators/skip-until/skip-until.component';
import { SkipWhileComponent } from './components/skip-operators/skip-while/skip-while.component';
import { SkipOperatorsComponent } from './components/skip-operators/operators/operators.component';
import { SkipOperatorComponent } from './components/skip-operators/skip-operator/skip-operator.component';

import { DistinctComponent } from './components/distinct-operator/distinct/distinct.component';
import { DistinctOperatorsComponent } from './components/distinct-operator/distinct-operators/distinct-operators.component';
import { DistinctUntilChangedComponent } from './components/distinct-operator/distinct-until-changed/distinct-until-changed.component';
import { DistinctUntilKeyChangedComponent } from './components/distinct-operator/distinct-until-key-changed/distinct-until-key-changed.component';

import { LastComponent } from './components/filtering-operators/last/last.component';
import { AuditComponent } from './components/filtering-operators/audit/audit.component';
import { FirstComponent } from './components/filtering-operators/first/first.component';
import { FilterComponent } from './components/filtering-operators/filter/filter.component';
import { SampleComponent } from './components/filtering-operators/sample/sample.component';
import { SingleComponent } from './components/filtering-operators/single/single.component';
import { ThrottleComponent } from './components/filtering-operators/throttle/throttle.component';
import { DebounceComponent } from './components/filtering-operators/debounce/debounce.component';
import { ElementAtComponent } from './components/filtering-operators/element-at/element-at.component';
import { IgnoreElementComponent } from './components/filtering-operators/ignore-element/ignore-element.component';
import { FilterOperatorsComponent } from './components/filtering-operators/filter-operators/filter-operators.component';

import { MapToComponent } from './components/transformation-operators/map-to/map-to.component';
import { MapOperatorComponent } from './components/transformation-operators/map-operator/map-operator.component';
import { TransformationOperatorsComponent } from './components/transformation-operators/operators/operators.component';

import { AjaxComponent } from './components/creation-operators/ajax/ajax.component';
import { CreationOperatorsComponent } from './components/creation-operators/operators/operators.component';

import { MergeMapComponent } from './components/mapping-operators/merge-map/merge-map.component';
import { ConcatMapComponent } from './components/mapping-operators/concat-map/concat-map.component';
import { SwitchMapComponent } from './components/mapping-operators/switch-map/switch-map.component';
import { ExhaustMapComponent } from './components/mapping-operators/exhaust-map/exhaust-map.component';
import { MappingOperatorsComponent } from './components/mapping-operators/operators/operators.component';
import { MergeMapToComponent } from './components/mapping-operators/merge-map-to/merge-map-to.component';
import { ConcatMapToComponent } from './components/mapping-operators/concat-map-to/concat-map-to.component';
import { SwitchMapToComponent } from './components/mapping-operators/switch-map-to/switch-map-to.component';

import { SubjectsComponent } from './components/subjects/subjects.component';
import { HotAndColdObservablesComponent } from './components/subjects/hot-and-cold-observables/hot-and-cold-observables.component';
import { MulticastAndConnectableComponent } from './components/subjects/multicast-and-connectable/multicast-and-connectable.component';
import { PublishRefcountShareComponent } from './components/subjects/publish-refcount-share/publish-refcount-share.component';
import { BehaviorSubjectComponent } from './components/subjects/behavior-subject/behavior-subject.component';
import { ReplaySubjectComponent } from './components/subjects/replay-subject/replay-subject.component';
import { AsyncSubjectComponent } from './components/subjects/async-subject/async-subject.component';
import { VoidSubjectComponent } from './components/subjects/void-subject/void-subject.component';

import { SubjectOperatorsComponent } from './components/subjects/operators/operators.component';
import { PublishBehaviorComponent } from './components/subjects/operators/publish-behavior/publish-behavior.component';
import { PublishLastComponent } from './components/subjects/operators/publish-last/publish-last.component';
import { PublishReplayComponent } from './components/subjects/operators/publish-replay/publish-replay.component';

import { ErrorHandlingOperatorsComponent } from './components/error-handling-operators/error-handling-operators.component';
import { CatchErrorComponent } from './components/error-handling-operators/catch-error/catch-error.component';
import { RetryComponent } from './components/error-handling-operators/retry/retry.component';
import { RetryWhenComponent } from './components/error-handling-operators/retry-when/retry-when.component';

import { ObservableCreationOperatorsComponent } from './components/observable-creation-operators/observable-creation-operators.component';
import { CombineLatestComponent } from './components/observable-creation-operators/combine-latest/combine-latest.component';
import { ConcatComponent } from './components/observable-creation-operators/concat/concat.component';
import { ForkJoinComponent } from './components/observable-creation-operators/fork-join/fork-join.component';
import { MergeComponent } from './components/observable-creation-operators/merge/merge.component';
import { PartitionComponent } from './components/observable-creation-operators/partition/partition.component';
import { RaceComponent } from './components/observable-creation-operators/race/race.component';
import { ZipComponent } from './components/observable-creation-operators/zip/zip.component';

import { SchedulersComponent } from './components/schedulers/schedulers.component';
import { DeferComponent } from './components/observable-creation-operators/defer/defer.component';
import { RangeComponent } from './components/observable-creation-operators/range/range.component';
import { GenerateComponent } from './components/observable-creation-operators/generate/generate.component';
import { TimerComponent } from './components/observable-creation-operators/timer/timer.component';
import { CountComponent } from './components/observable-creation-operators/count/count.component';
import { MaxComponent } from './components/observable-creation-operators/max/max.component';
import { MinComponent } from './components/observable-creation-operators/min/min.component';
import { ReduceComponent } from './components/observable-creation-operators/reduce/reduce.component';

import { ConditionalOperatorComponent } from './components/conditional-operator/conditional-operator.component';
import { IsEmptyComponent } from './components/conditional-operator/is-empty/is-empty.component';
import { FindIndexComponent } from './components/conditional-operator/find-index/find-index.component';
import { FindComponent } from './components/conditional-operator/find/find.component';
import { EveryComponent } from './components/conditional-operator/every/every.component';
import { DefaultIfEmptyComponent } from './components/conditional-operator/default-if-empty/default-if-empty.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'observables',
    pathMatch: 'full',
  },
  {
    path: 'observables',
    component: ObservablesComponent,
    children: [
      { path: 'create-observables', component: CreateObservablesComponent },
      { path: 'custom-observables', component: CustomObservableComponent },
      {
        path: 'unsubscribe-observables',
        component: UnsubscribeObservableComponent,
      },
    ],
  },
  {
    path: 'operators',
    component: OperatorsComponent,
    children: [
      {
        path: 'buffer-operators',
        component: BufferOperatorsComponent,
        children: [
          { path: 'buffer', component: BufferOperatorComponent },
          { path: 'buffer-time', component: BufferTimeComponent },
          { path: 'buffer-when', component: BufferWhenComponent },
          { path: 'buffer-count', component: BufferCountComponent },
          { path: 'buffer-toggle', component: BufferToggleComponent },
        ],
      },
      {
        path: 'take-operators',
        component: TakeOperatorsComponent,
        children: [
          { path: 'take', component: TakeOperatorComponent },
          { path: 'take-last', component: TakeLastComponent },
          { path: 'take-while', component: TakeWhileComponent },
          { path: 'take-until', component: TakeUntillComponent },
        ],
      },
      {
        path: 'skip-operators',
        component: SkipOperatorsComponent,
        children: [
          { path: 'skip', component: SkipOperatorComponent },
          { path: 'skip-last', component: SkipLastComponent },
          { path: 'skip-until', component: SkipUntilComponent },
          { path: 'skip-while', component: SkipWhileComponent },
        ],
      },
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
      {
        path: 'error-handling-operators',
        component: ErrorHandlingOperatorsComponent,
        children: [
          { path: 'catch-error', component: CatchErrorComponent },
          { path: 'retry', component: RetryComponent },
          { path: 'retry-when', component: RetryWhenComponent },
        ],
      },
      {
        path: 'observable-creation-operators',
        component: ObservableCreationOperatorsComponent,
        children: [
          { path: 'combine-latest', component: CombineLatestComponent },
          { path: 'concat', component: ConcatComponent },
          { path: 'fork-join', component: ForkJoinComponent },
          { path: 'merge', component: MergeComponent },
          { path: 'partition', component: PartitionComponent },
          { path: 'race', component: RaceComponent },
          { path: 'zip', component: ZipComponent },
          { path: 'defer', component: DeferComponent },
          { path: 'range', component: RangeComponent },
          { path: 'generate', component: GenerateComponent },
          { path: 'timer', component: TimerComponent },
          { path: 'count', component: CountComponent },
          { path: 'max', component: MaxComponent },
          { path: 'min', component: MinComponent },
          { path: 'reduce', component: ReduceComponent },
        ],
      },
      {
        path: 'condtitional-operators',
        component: ConditionalOperatorComponent,
        children: [
          { path: 'is-empty', component: IsEmptyComponent },
          { path: 'find-index', component: FindIndexComponent },
          { path: 'find', component: FindComponent },
          { path: 'every', component: EveryComponent },
          { path: 'default', component: DefaultIfEmptyComponent },
        ],
      },
    ],
  },
  {
    path: 'subject',
    component: SubjectsComponent,
    children: [
      {
        path: 'hot-and-cold-observables',
        component: HotAndColdObservablesComponent,
      },
      {
        path: 'multicast-and-connectable',
        component: MulticastAndConnectableComponent,
      },
      {
        path: 'publish-refcount-share',
        component: PublishRefcountShareComponent,
      },
      {
        path: 'behavior-subject',
        component: BehaviorSubjectComponent,
      },
      {
        path: 'replay-subject',
        component: ReplaySubjectComponent,
      },
      {
        path: 'async-subject',
        component: AsyncSubjectComponent,
      },
      {
        path: 'void-subject',
        component: VoidSubjectComponent,
      },
      {
        path: 'subject-operators',
        component: SubjectOperatorsComponent,
        children: [
          {
            path: 'publish-behavior',
            component: PublishBehaviorComponent,
          },
          {
            path: 'publish-last',
            component: PublishLastComponent,
          },
          {
            path: 'publish-replay',
            component: PublishReplayComponent,
          },
        ],
      },
    ],
  },
  {
    path: 'scheduler',
    component: SchedulersComponent,
  },
];

export const routingComponents = [
  ObservablesComponent,
  CustomObservableComponent,
  CreateObservablesComponent,
  UnsubscribeObservableComponent,
  OperatorsComponent,
  BufferWhenComponent,
  BufferCountComponent,
  BufferToggleComponent,
  BufferOperatorComponent,
  BufferOperatorsComponent,
  TakeLastComponent,
  TakeWhileComponent,
  TakeUntillComponent,
  TakeOperatorComponent,
  TakeOperatorsComponent,
  SkipLastComponent,
  SkipUntilComponent,
  SkipWhileComponent,
  SkipOperatorComponent,
  SkipOperatorsComponent,
  DistinctComponent,
  DistinctOperatorsComponent,
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
  SubjectsComponent,
  HotAndColdObservablesComponent,
  MulticastAndConnectableComponent,
  PublishRefcountShareComponent,
  BehaviorSubjectComponent,
  ReplaySubjectComponent,
  AsyncSubjectComponent,
  VoidSubjectComponent,
  SubjectOperatorsComponent,
  PublishBehaviorComponent,
  PublishLastComponent,
  PublishReplayComponent,
  ErrorHandlingOperatorsComponent,
  CatchErrorComponent,
  RetryComponent,
  RetryWhenComponent,
  ObservableCreationOperatorsComponent,
  CombineLatestComponent,
  ConcatComponent,
  ForkJoinComponent,
  MergeComponent,
  PartitionComponent,
  RaceComponent,
  ZipComponent,
  SchedulersComponent,
  DeferComponent,
  RangeComponent,
  GenerateComponent,
  TimerComponent,
  CountComponent,
  MaxComponent,
  MinComponent,
  ReduceComponent,
  ConditionalOperatorComponent,
  IsEmptyComponent,
  FindIndexComponent,
  FindComponent,
  EveryComponent,
  DefaultIfEmptyComponent,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

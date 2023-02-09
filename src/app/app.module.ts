import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { UnsubscriberService } from './services/unsubscriber.service';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { PublishReplayComponent } from './components/subjects/operators/publish-replay/publish-replay.component';
import { ErrorHandlingOperatorsComponent } from './components/error-handling-operators/error-handling-operators.component';
import { CatchErrorComponent } from './components/error-handling-operators/catch-error/catch-error.component';
import { RetryComponent } from './components/error-handling-operators/retry/retry.component';
import { RetryWhenComponent } from './components/error-handling-operators/retry-when/retry-when.component';

@NgModule({
  declarations: [AppComponent, routingComponents, PublishReplayComponent, ErrorHandlingOperatorsComponent, CatchErrorComponent, RetryComponent, RetryWhenComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [UnsubscriberService],
  bootstrap: [AppComponent],
})
export class AppModule {}

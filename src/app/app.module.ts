import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { UnsubscriberService } from './services/unsubscriber.service';
import { AppRoutingModule, routingComponents } from './app-routing.module';

@NgModule({
  declarations: [AppComponent, routingComponents],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [UnsubscriberService],
  bootstrap: [AppComponent],
})
export class AppModule {}

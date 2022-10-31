import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularProjectComponent } from './angular-project/angular-project.component';
import { AngularClientComponent } from './angular-client/angular-client.component';

@NgModule({
  declarations: [
    AppComponent,
    AngularProjectComponent,
    AngularClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

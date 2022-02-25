import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ControlComponent } from './control/control.component';
import { ChangelogComponent } from './changelog/changelog.component';

@NgModule({
  imports:      [ BrowserModule],
  declarations: [ AppComponent, ControlComponent, ChangelogComponent],
  providers: [],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
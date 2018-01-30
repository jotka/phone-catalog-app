import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PhoneListComponent } from './catalog/containers/phone-list/phone-list.component';
import { PhoneDetailComponent } from './catalog/components/phone-detail/phone-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    PhoneListComponent,
    PhoneDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

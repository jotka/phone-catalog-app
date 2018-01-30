import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { StoreModule } from '@ngrx/store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'

import { AppRoutingModule } from './app-routing.module'
import { CatalogModule } from './catalog/catalog.module'
import { AppComponent } from './app.component'
import { reducersMap } from './app-redux/app.store'
import { metaReducers } from './app-redux/meta.reducer'


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CatalogModule,
    StoreModule.forRoot(reducersMap, { metaReducers }),
    StoreDevtoolsModule.instrument({
      maxAge: 25 //  Retains last 25 states
    }),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

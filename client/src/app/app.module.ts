import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { StoreModule } from '@ngrx/store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'

import { AppRoutingModule } from './app-routing.module'
import { CatalogModule } from './catalog/catalog.module'
import { AppComponent } from './app.component'
import { reducersMap } from './app-redux/app.store'
import { metaReducers } from './app-redux/meta.reducer'

import { CatalogEffects } from './catalog/redux/catalog.effects'
import { EffectsModule } from '@ngrx/effects'
import { CatalogService } from './catalog/services/catalog.service'
import { HttpClientModule } from '@angular/common/http'
import { Url } from './global/url'


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CatalogModule,
    HttpClientModule,
    StoreModule.forRoot(reducersMap, { metaReducers }),
    EffectsModule.forRoot([CatalogEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25 //  Retains last 25 states
    }),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    Url,
    CatalogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

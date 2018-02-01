import { Component, OnDestroy, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { Subscription } from 'rxjs/Subscription'

import * as appReducer from './app-redux/app.store'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Phone Catalog'
  firstAccess = false
  firstAccessSubs: Subscription

  constructor(private store: Store<appReducer.State>) {

  }

  ngOnInit(){
    this.firstAccessSubs = this.store
      .select(appReducer.isFirstAccess)
      .subscribe((firstAccess: boolean) => {
        this.firstAccess = firstAccess
      })
  }

  ngOnDestroy() {
    this.firstAccessSubs.unsubscribe()
  }

  showCatalog() {
    this.store.dispatch(new appReducer.CleanFirstAccess())
  }

}

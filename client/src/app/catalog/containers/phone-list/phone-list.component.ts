import { Component, OnDestroy, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { Subscription } from 'rxjs/Subscription'

import * as appReducer from '../../../app-redux/app.store'
import * as catalogReducer from '../../redux/catalog.reducer'
import * as catalogActions from '../../redux/catalog.actions'
import { Phone } from '../../models/catalog.model'
import { Observable } from 'rxjs/Observable'


@Component({
  selector: 'app-phone-list',
  templateUrl: './phone-list.component.html',
  styleUrls: ['./phone-list.component.css']
})
export class PhoneListComponent implements OnInit, OnDestroy {
  isLoading$: Observable<boolean>
  phonesSub: Subscription
  phones: Array<Phone>

  constructor(private store: Store<appReducer.State>) {}

  ngOnInit() {
    this.isLoading$ = this.store.select(catalogReducer.isLoading);
    this.phonesSub = this.store
      .select(catalogReducer.getPhones)
      .subscribe((phones: Array<Phone>) => {
        this.phones = phones
    });

    this.store.dispatch(new catalogActions.FetchPhones())
  }

  ngOnDestroy() {
    this.phonesSub.unsubscribe()
  }
}

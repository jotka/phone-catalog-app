import { Injectable } from '@angular/core'
import { Actions, Effect } from '@ngrx/effects'
import { of } from 'rxjs/observable/of'
import { map, catchError, switchMap } from 'rxjs/operators'

import * as catalogModel from '../models/catalog.model'
import * as catalogActions from './catalog.actions'
import { CatalogService } from '../services/catalog.service'


@Injectable()
export class CatalogEffects {
  @Effect()
  fetchPersonalData$ = this.actions$.ofType(catalogActions.FETCH_PHONES).pipe(
    switchMap((action: catalogActions.FetchPhones) => {
      return this.service.getPhones().pipe(
        map(
          (phones: Array<catalogModel.Phone>) => new catalogActions.FetchPhonesSuccess(phones)
        ),
        catchError(er => {
          return of(new catalogActions.FetchPhonesError(er))
        })
      )
    })
  )


  constructor(private actions$: Actions, private service: CatalogService) {}
}

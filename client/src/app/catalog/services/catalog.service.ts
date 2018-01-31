import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/Observable'
import { Url } from '../../global/url'

import * as catalogModel from '../models/catalog.model'


@Injectable()
export class CatalogService {
  constructor(private http: HttpClient, private url: Url) {}

  getPhones(): Observable<Array<catalogModel.Phone>> {
    return this.http.get<Array<catalogModel.Phone>>(this.url.getPhonesUrl())
  }
}

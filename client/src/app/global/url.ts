import { Injectable } from '@angular/core'
import { environment } from '../../environments/environment'

@Injectable()
export class Url {
  catalogUrl = environment.catalogUrl

  getPhonesUrl() {
    return `${this.catalogUrl}/phones`
  }

}

import { NgModule } from '@angular/core'

import { CatalogRoutingModule } from './catalog-routing.module'

import { PhoneListComponent } from './containers/phone-list/phone-list.component'
import { PhoneDetailComponent } from './components/phone-detail/phone-detail.component'


@NgModule({
  imports: [CatalogRoutingModule],
  declarations: [
    PhoneListComponent,
    PhoneDetailComponent
  ],
  providers: [],
  exports: [PhoneListComponent]
})
export class CatalogModule {}

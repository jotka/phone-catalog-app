import { NgModule } from '@angular/core'

import { CatalogRoutingModule } from './catalog-routing.module'

import { PhoneListComponent } from './containers/phone-list/phone-list.component'
import { PhoneDetailComponent } from './components/phone-detail/phone-detail.component'
import { CommonModule } from '@angular/common'


@NgModule({
  imports: [
    CommonModule,
    CatalogRoutingModule
  ],
  declarations: [
    PhoneListComponent,
    PhoneDetailComponent
  ],
  providers: [],
  exports: [PhoneListComponent]
})
export class CatalogModule {}

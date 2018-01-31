import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { CatalogRoutingModule } from './catalog-routing.module'

import { PhoneListComponent } from './containers/phone-list/phone-list.component'
import { PhoneDetailComponent } from './components/phone-detail/phone-detail.component'
import { MatCardModule } from '@angular/material'


@NgModule({
  imports: [
    CommonModule,
    CatalogRoutingModule,
    MatCardModule
  ],
  declarations: [
    PhoneListComponent,
    PhoneDetailComponent
  ],
  providers: [],
  exports: [PhoneListComponent]
})
export class CatalogModule {}

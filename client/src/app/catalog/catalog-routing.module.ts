import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { PhoneListComponent } from './containers/phone-list/phone-list.component'

const routes: Routes = [
  {
    path: '',
    component: PhoneListComponent
  }
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogRoutingModule {}

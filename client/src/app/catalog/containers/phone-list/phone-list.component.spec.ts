import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { ActionReducerMap, Store, StoreModule } from '@ngrx/store'

import { PhoneListComponent } from './phone-list.component'
import { PhoneDetailComponent } from '../../components/phone-detail/phone-detail.component'
import { MatCardModule, MatProgressSpinnerModule } from '@angular/material'
import * as appReducer from '../../../app-redux/app.store'
import * as catalogReducer from '../../redux/catalog.reducer'


describe('PhoneListComponent', () => {
  let component: PhoneListComponent
  let fixture: ComponentFixture<PhoneListComponent>
  let store: Store<appReducer.State>

  const reducers: ActionReducerMap<any> = {
    app: appReducer.reducer,
    catalog: catalogReducer.reducer
  }

  const initialState: catalogReducer.CatalogState = {
    phones: [],
    loadingPhones: false,
    error: null
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatProgressSpinnerModule,
        MatCardModule,
        StoreModule.forRoot(reducers, { initialState: initialState })
      ],
      declarations: [
        PhoneListComponent,
        PhoneDetailComponent
      ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneListComponent)
    component = fixture.componentInstance
    store = fixture.debugElement.injector.get(Store)
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('store and props should be defined', () => {
    expect(store).toBeDefined()
    expect(component.isLoading$).toBeDefined()
    expect(component.phonesSub).toBeDefined()
    expect(component.phones).toBeDefined()
  })
})

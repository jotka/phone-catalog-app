import { TestBed, async } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { ActionReducerMap, StoreModule } from '@ngrx/store'

import { AppComponent } from './app.component'
import * as appReducer from './app-redux/app.store'
import * as catalogReducer from './catalog/redux/catalog.reducer'


describe('AppComponent', () => {

  const reducers: ActionReducerMap<any> = {
    app: appReducer.reducer,
    catalog: catalogReducer.reducer
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[
        RouterTestingModule,
        StoreModule.forRoot(reducers),
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents()
  }));


  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy()
  }));

  it(`should have as title 'Phone Catalog'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Phone Catalog')
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Phone Catalog')
  }));

  it('should render button', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges()
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('button').textContent).toContain('Show catalog')
  }))

});

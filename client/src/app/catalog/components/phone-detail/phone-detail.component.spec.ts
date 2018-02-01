import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { PhoneDetailComponent } from './phone-detail.component'
import { MatCardModule } from '@angular/material'


describe('PhoneDetailComponent', () => {
  let component: PhoneDetailComponent
  let fixture: ComponentFixture<PhoneDetailComponent>

  const testData = {
    id: "A2IAMUC55K9EUL",
    image: "https://images-eu.ssl-images-amazon.com/images/I/41bkJWYvjJL._AC_US218_.jpg",
    title: "Leagoo S8",
    description: ["Leagoo S8 - 5,7\" 4G FDD-LTE Smartphone, Pantalla Infinita"],
    maker: "Leagoo",
    color: "negro",
    price: "137,99 €",
    stock: 4
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatCardModule
      ],
      declarations: [
        PhoneDetailComponent
      ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneDetailComponent)
    component = fixture.componentInstance
    component.phone = testData
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('phone should be defined', () => {
    expect(component.phone).toBeDefined()
  })

  it('should render card', async(() => {
    fixture.detectChanges()
    const compiled = fixture.debugElement.nativeElement
    expect(compiled.querySelector('mat-card')).toBeDefined()
  }))

  it('should render a image', async(() => {
    fixture.detectChanges()
    const compiled = fixture.debugElement.nativeElement
    expect(compiled.querySelector('img')).toBeDefined()
  }))

})

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalAbonoFertilizantePage } from './modal-abono-fertilizante.page';

describe('ModalAbonoFertilizantePage', () => {
  let component: ModalAbonoFertilizantePage;
  let fixture: ComponentFixture<ModalAbonoFertilizantePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAbonoFertilizantePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalAbonoFertilizantePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

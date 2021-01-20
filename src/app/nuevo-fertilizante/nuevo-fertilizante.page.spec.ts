import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NuevoFertilizantePage } from './nuevo-fertilizante.page';

describe('NuevoFertilizantePage', () => {
  let component: NuevoFertilizantePage;
  let fixture: ComponentFixture<NuevoFertilizantePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevoFertilizantePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NuevoFertilizantePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

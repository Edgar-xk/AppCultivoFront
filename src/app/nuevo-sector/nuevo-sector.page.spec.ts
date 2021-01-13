import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NuevoSectorPage } from './nuevo-sector.page';

describe('NuevoSectorPage', () => {
  let component: NuevoSectorPage;
  let fixture: ComponentFixture<NuevoSectorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevoSectorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NuevoSectorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

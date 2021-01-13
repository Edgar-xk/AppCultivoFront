import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NuevoEspacioPage } from './nuevo-espacio.page';

describe('NuevoEspacioPage', () => {
  let component: NuevoEspacioPage;
  let fixture: ComponentFixture<NuevoEspacioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevoEspacioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NuevoEspacioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

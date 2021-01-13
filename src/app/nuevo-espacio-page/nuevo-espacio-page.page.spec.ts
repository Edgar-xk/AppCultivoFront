import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NuevoEspacioPagePage } from './nuevo-espacio-page.page';

describe('NuevoEspacioPagePage', () => {
  let component: NuevoEspacioPagePage;
  let fixture: ComponentFixture<NuevoEspacioPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevoEspacioPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NuevoEspacioPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

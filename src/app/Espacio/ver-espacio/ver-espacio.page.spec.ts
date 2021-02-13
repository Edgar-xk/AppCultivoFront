import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VerEspacioPage } from './ver-espacio.page';

describe('VerEspacioPage', () => {
  let component: VerEspacioPage;
  let fixture: ComponentFixture<VerEspacioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerEspacioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VerEspacioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

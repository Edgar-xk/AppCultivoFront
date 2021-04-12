import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VerRemediosPage } from './ver-remedios.page';

describe('VerRemediosPage', () => {
  let component: VerRemediosPage;
  let fixture: ComponentFixture<VerRemediosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerRemediosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VerRemediosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

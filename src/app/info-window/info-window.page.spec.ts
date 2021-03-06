import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InfoWindowPage } from './info-window.page';

describe('InfoWindowPage', () => {
  let component: InfoWindowPage;
  let fixture: ComponentFixture<InfoWindowPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoWindowPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InfoWindowPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

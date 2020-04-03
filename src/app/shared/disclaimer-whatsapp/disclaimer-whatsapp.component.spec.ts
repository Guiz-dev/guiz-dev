import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisclaimerWhatsappComponent } from './disclaimer-whatsapp.component';

describe('DisclaimerWhatsapp', () => {
  let component: DisclaimerWhatsappComponent;
  let fixture: ComponentFixture<DisclaimerWhatsappComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisclaimerWhatsappComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisclaimerWhatsappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

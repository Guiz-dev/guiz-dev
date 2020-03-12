import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuiaMeuInssComponent } from './guia-meu-inss.component';

describe('GuiaMeuInssComponent', () => {
  let component: GuiaMeuInssComponent;
  let fixture: ComponentFixture<GuiaMeuInssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuiaMeuInssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuiaMeuInssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

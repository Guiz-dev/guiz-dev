import { TestBed } from '@angular/core/testing';

import { GuiaMeuInssService } from './guia-meu-inss.service';

describe('GuiaMeuInssService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GuiaMeuInssService = TestBed.get(GuiaMeuInssService);
    expect(service).toBeTruthy();
  });
});

import { Component, OnInit, Input, Output } from '@angular/core';
import { GuiaMeuInssService } from './guia-meu-inss.service';
import { DigitalDataService } from '../digital-data.service';
import { EventEmitter } from 'protractor';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-guia-meu-inss',
  templateUrl: './guia-meu-inss.component.html',
  styleUrls: ['./guia-meu-inss.component.scss']
})
export class GuiaMeuInssComponent implements OnInit {

  guiaInssSteps = {
    0: 'PortalINSS',
    1: 'Beneficio',
    2: 'Imprimir'
  };

  public guiaPortabilidadeViewContent: Object = {};

  constructor(
    private guiaMeuInssService: GuiaMeuInssService,
    private digitalDataService: DigitalDataService
    ) { }

  ngOnInit() {
    this.guiaPortabilidadeViewContent = this.guiaMeuInssService.createGuiaPortabilidadeObjectView();
    this.digitalDataService.imprima(this.guiaInssSteps[0]);
  }

  newStep(step: number): void {
    this.digitalDataService.imprima(this.guiaInssSteps[step]);
  }

}

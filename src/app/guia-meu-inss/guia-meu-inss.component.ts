import { Component, OnInit } from '@angular/core';
import { GuiaMeuInssService } from './guia-meu-inss.service';

@Component({
  selector: 'app-guia-meu-inss',
  templateUrl: './guia-meu-inss.component.html',
  styleUrls: ['./guia-meu-inss.component.scss']
})
export class GuiaMeuInssComponent implements OnInit {

  public guiaPortabilidadeViewContent: Object = {};

  constructor(
    private guiaMeuInssService: GuiaMeuInssService
    ) { }

    ngOnInit() {
      this.guiaPortabilidadeViewContent = this.guiaMeuInssService.createGuiaPortabilidadeObjectView();
    }

}

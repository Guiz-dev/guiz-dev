import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GuiaMeuInssService {

  public createGuiaPortabilidadeObjectView(): Object {
    return [
      {
        image: {
          mobile: '../../../assets/images/guia-sigepe-mobile-1.svg',
          desktop: 'assets/images/guia-portabilidade-desktop-1.svg'
        },
        title: 'Entre no Sigac',
        description: 'Insira seu CPF e sua senha para acessar o portal do SIGEPE. '
      },
      {
        image: {
          mobile: '../../../assets/images/guia-sigepe-mobile-2.svg',
          desktop: '../../../assets/images/guia-portabilidade-desktop-2.svg'
        },
        title: 'Selecione Consignações',
        description: 'Escolha o benefício  no qual fez o empréstimo consignado que vai portar. '
      },
      {
        image: {
          mobile: '../../../assets/images/guia-sigepe-mobile-3.svg',
          desktop: '../../../assets/images/guia-portabilidade-desktop-3.svg'
        },
        title: 'Gerar Autorização da Consignatária',
        description: 'Escolha a última opção dentro de Consignações. '
      }
    ];
  }

}

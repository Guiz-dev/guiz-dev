import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GuiaMeuInssService {

  public createGuiaPortabilidadeObjectView() {
    return [
      {
        image: {
          mobile: '../../../assets/images/guia-portabilidade-mobile-1.svg',
          desktop: '../../../assets/images/guia-portabilidade-desktop-1.svg'
        },
        title: 'Entre no portal do Meu INSS',
        description: 'Entre no Meu INSS pelo endereço no final do guia com seu CPF e senha.'
      },
      {
        image: {
          mobile: '../../../assets/images/guia-portabilidade-mobile-2.svg',
          desktop: '../../../assets/images/guia-portabilidade-desktop-2.svg'
        },
        title: 'Selecione seu benefício',
        description: 'Escolha o benefício  no qual fez o empréstimo consignado que vai portar.'
      },
      {
        image: {
          mobile: '../../../assets/images/guia-portabilidade-mobile-3.svg',
          desktop: '../../../assets/images/guia-portabilidade-desktop-3.svg'
        },
        title: 'Clique em imprimir',
        description: 'Se estiver no aplicativo, clique em baixar. Aí é só guardar os dados.'
      }
    ];
  }
}

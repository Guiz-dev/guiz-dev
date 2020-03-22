import { Injectable, OnInit } from '@angular/core';
import { EventEmitter } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class DigitalDataService {

  imprima(step: string) {
      console.log('Tela: ', step);
  }
}

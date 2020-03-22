import { Injectable, ElementRef, Inject, EventEmitter } from '@angular/core';
import { BehaviorSubject, Subject, fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class GuiaService {


  public newResize = new EventEmitter();


  constructor() {
    fromEvent(window, 'resize')
      .pipe(
        distinctUntilChanged(),
        tap(() => this.detectResize()))
          .subscribe();
  }

  detectResize() {
    this.newResize.emit(true);
  }
}

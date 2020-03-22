import { distinctUntilChanged, tap } from 'rxjs/internal/operators';
import { Router } from '@angular/router';
import { fromEvent, BehaviorSubject } from 'rxjs';
import {
  ChangeDetectionStrategy,
  ViewEncapsulation,
  AfterViewInit,
  ViewChildren,
  Component,
  ViewChild,
  OnInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-guia',
  templateUrl: './guia.component.html',
  styleUrls: ['./guia.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GuiaComponent implements OnInit, AfterViewInit {

  @Input()
  public viewContent: Object[];

  public offsetPositions: number[] = [0];

  public currentStep = 0;

  @Output()
  public newStepEvent = new EventEmitter<number>();

  @ViewChild('guia__swipe', {static: false})
  swipeElement;

  @ViewChildren('guia__step')
  stepElements;


  constructor(
    private router: Router,
    // private store: Store
    ) {}

    ngOnInit() {
      fromEvent(window, 'resize')
      .pipe(
        distinctUntilChanged(),
        tap(() => {
          this.calculateOffsets(),
          this.scrollTo(this.offsetPositions[this.currentStep], false);
        })
      ).subscribe();
    }

  public ngAfterViewInit(): void {
    this.calculateOffsets();
  }

  public calculateOffsets() {
    this.resetOffsetPositions();
    this.viewContent.forEach((step, index) => {
      this.offsetPositions.push(this.stepElements._results[index].nativeElement.offsetLeft);
    });
  }

  public getSwipeElement(): HTMLElement {
    return this.swipeElement.nativeElement;
  }

  public resetOffsetPositions(): Object {
    return this.offsetPositions = [];
  }

  public isLastOffset(): boolean {
    return this.currentStep >= this.offsetPositions.length - 1;
  }

  public nextStep(): void {
    if (!this.isLastOffset()) {
      this.scrollTo(this.offsetPositions[this.currentStep + 1], true);
    } else {
      this.endGuia();
    }
  }

  public scrollTo(offset: number, isSmooth: boolean): void {
    this.getSwipeElement().scroll({
      left: offset,
      behavior: isSmooth ? 'smooth' : 'auto'
    });
  }

  public updateCurrentStep(): void {
    this.viewContent.forEach((step, index) => {
      if (this.getSwipeElement().scrollLeft === this.offsetPositions[index]) {
        const newStep = index;
        if (newStep !== this.currentStep) {
          this.currentStep = index;
          this.newStepEvent.emit(this.currentStep);
        }
      }
    });
  }

  public endGuia() {
    // this.store.dispatch([new NextStepSession(this.router.url)]);
    alert('fim');
  }

}

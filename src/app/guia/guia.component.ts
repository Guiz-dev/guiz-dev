import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-guia',
  templateUrl: './guia.component.html',
  styleUrls: ['./guia.component.scss']
})
export class GuiaComponent implements AfterViewInit {

  @Input()
  public viewContent: Object[] = [];

  public offsetPositions: Object[] = [];

  public currentOffset = 0;

  public swipeView: HTMLElement;

  public ngAfterViewInit(): void {
    this.swipeView = document.getElementById('guia__swipe');

    this.viewContent.forEach((step, i) => {
      this.offsetPositions.push(document.getElementById(`step-${i}`).offsetLeft);
    });
  }

  public getWindowWidth(): number {
    return document.getElementById(`guia__swipe`).offsetWidth;
  }

  public nextStep(): void {
    if (this.currentOffset < this.offsetPositions[this.offsetPositions.length - 1]) {
      this.scrollTo(this.currentOffset + this.getWindowWidth());
    }
  }

  public scrollTo(offset: number): void {
    this.swipeView.scroll({
      top: 0,
      left: this.updatecurrentOffset(offset),
      behavior: 'smooth'
    });
  }

  public updatecurrentOffset(newCurrentOffset: number): number {
    return this.currentOffset = newCurrentOffset;
  }

  public touchMove(): void {
    this.viewContent.forEach((step, i) => {
      if (document.getElementById('guia__swipe').scrollLeft === this.offsetPositions[i]) {
        this.scrollTo(document.getElementById('guia__swipe').scrollLeft);
      }
    });
  }


}

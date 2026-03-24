import {Component, HostListener, OnInit} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-mockup-target',
  imports: [
    NgClass
  ],
  templateUrl: './mockup-target.html',
  styleUrl: './mockup-target.scss',
})
export class MockupTarget implements OnInit {
  Template!: { Left: number, Right: number };

  constructor() {
  }

  ngOnInit(): void {
    if (!!document) { //TODO
      this.CalculateWidth(document.body.offsetWidth);
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    const width = (event.target as Window).innerWidth;
    this.CalculateWidth(width);
  }

  CalculateWidth(width: number) {
    if (width < 710) {
      this.Template = {Left: 88, Right: (width - 88 - 30)};
    } else if (width < 1005) {
      this.Template = {Left: 88, Right: 600};
    } else if (width < 1080) {
      this.Template = {Left: 88, Right: 920};
    } else if (width < 1280) {
      this.Template = {Left: 88, Right: 990};
    } else if (width < 1920) {
      this.Template = {Left: 275, Right: 990};
    } else {
      console.log('else', this.Template);
      this.Template = {Left: 75, Right: 990};
    }
    // console.log(this.Template);
  }

}

import {Component, Input, OnInit} from '@angular/core';
import {ContentType, Proposition, Thesis} from "../../Models";

@Component({
  selector: 'app-case-thesis',
  imports: [],
  templateUrl: './case-thesis.component.html',
  styleUrl: './case-thesis.component.scss',
})
export class CaseThesisComponent implements OnInit {
  @Input() Thesis!: Thesis;
  Type: string = '';
  Proposition: string = '';

  constructor() {
  }

  ngOnInit(): void {
    this.Type = ContentType[this.Thesis.Type];
    this.Proposition = Proposition[this.Thesis.Proposition];
  }

}

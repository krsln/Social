import {Component, OnInit} from '@angular/core';

import {NewsService} from '../../Services/news.service';
import { Case } from "../../Models";
import {RouterLink} from '@angular/router';
import {CaseThesisComponent} from '../case-thesis/case-thesis.component';
import {SimplePollComponent} from '../../../../Shared/components/simple-poll/simple-poll.component';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-case',
  imports: [
    RouterLink,
    CaseThesisComponent,
    SimplePollComponent,
    DatePipe
  ],
  templateUrl: './case.component.html',
  styleUrl: './case.component.scss',
})
export class CaseComponent implements OnInit {
  Case!: Case;
  PollValues: any;

  constructor(private service: NewsService) {
  }

  ngOnInit(): void {
    this.Case = this.service.GetMockupCase();
    console.log(this.Case);
    if (localStorage && !!localStorage.getItem('PollValues')) {
      this.PollValues = JSON.parse(localStorage.getItem('PollValues') ?? '{}');
      console.log(this.PollValues);
    }
  }

  pollResult($event: { Yes: number; No: number; Neutral: number; Total: number }) {
    this.PollValues = $event;
    localStorage.setItem('PollValues', JSON.stringify($event));
  }
}

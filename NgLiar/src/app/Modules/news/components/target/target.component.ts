import {Component, OnInit} from '@angular/core';

import {Entity, Case, EntityType} from '../../Models';
import {NewsService} from "../../Services/news.service";
import {RouterLink} from '@angular/router';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-target',
  imports: [
    RouterLink,
    DatePipe
  ],
  templateUrl: './target.component.html',
  styleUrl: './target.component.scss',
})
export class TargetComponent implements OnInit {
  Entity!: Entity;
  Case!: Case;

  constructor(private service: NewsService) {
  }

  ngOnInit(): void {
    this.Entity = {
      Id: 1,
      Name: 'TTNet',
      Desc: 'TTNET A.Ş., operating under the Türk Telekom brand, is the largest Internet service provider in Turkey and has around 7 million subscribers...',
      Type: EntityType.LegalEntity,
      Cases: [],
      Tags: []
    } as Entity;

    this.Case = this.service.GetMockupCase();
  }
}

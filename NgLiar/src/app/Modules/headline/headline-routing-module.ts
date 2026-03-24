import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {Headline} from './components/headline/headline';

const routes: Routes = [
  {
    path: '', data: {breadcrumb: 'Headline'},
    children: [
      {path: '', data: {breadcrumb: 'Headline'}, component: Headline},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeadlineRoutingModule {}

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {Challenge} from './components/challenge/challenge';

const routes: Routes = [
  {
    path: '', data: {breadcrumb: 'Challenge'},
    children: [
      {path: '', data: {breadcrumb: 'Challenge'}, component: Challenge},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChallengeRoutingModule {
}

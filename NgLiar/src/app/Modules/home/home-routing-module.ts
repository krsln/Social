import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {Home} from './components/home/home';
import {MockupTarget} from './components/mockup-target/mockup-target';

const routes: Routes = [
  {
    path: '', data: {breadcrumb: 'Home'},
    children: [
      {path: '', data: {breadcrumb: 'Home'}, component: Home},
      {path: 'Mockup/TargetHome', component: MockupTarget, children: []},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}

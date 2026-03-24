import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CaseComponent} from './components/case/case.component';
import {TargetComponent} from './components/target/target.component';
import {ProfileComponent} from "./components/profile/profile.component";
import {ArticleComponent} from './components/article/article.component';

const routes: Routes = [
  {
    path: '', data: {breadcrumb: 'Headline'},
    children: [
      {path: '', component: TargetComponent, children: []},
      {path: ':Target', component: TargetComponent, children: []},
      {path: 'Case/:Id', component: CaseComponent, children: []},
      {path: ':Target/Case/:Id', component: CaseComponent, children: []},

      {path: 'Detective/:UniqueName', component: ProfileComponent, children: []},
      {path: 'Detective/:UniqueName/Case/:Id', component: CaseComponent, children: []},

      {path: 'Columnist/:UniqueName', component: ProfileComponent, children: []},
      {path: 'Columnist/:UniqueName/Article/:Id', component: ArticleComponent, children: []},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsRoutingModule {
}

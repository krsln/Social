import {Routes} from '@angular/router';

import {LayoutRoot} from "./Layouts/layout-root/layout-root";

export const routes: Routes = [
  {
    path: 'Home', component: LayoutRoot,
    loadChildren: () => import('./Modules/home/home-module').then(mod => mod.HomeModule)
  },
  {
    path: 'News', component: LayoutRoot,
    loadChildren: () => import('./Modules/news/news-module').then(mod => mod.NewsModule)
  },
  {
    path: 'Challenge', component: LayoutRoot,
    loadChildren: () => import('./Modules/challenge/challenge-module').then(mod => mod.ChallengeModule)
  },
  {
    path: 'Headline', component: LayoutRoot,
    loadChildren: () => import('./Modules/headline/headline-module').then(mod => mod.HeadlineModule)
  },
  {
    path: '', component: LayoutRoot, children: [
      {path: '', redirectTo: '/News', pathMatch: 'full'},
      // {path: '**', resolve: {path: PathResolveService}, component: PageNotFoundComponent},
    ]
  },
];

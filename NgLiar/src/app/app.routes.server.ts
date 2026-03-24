import {RenderMode, ServerRoute} from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender
  },
  {path: 'News/Case/:Id', renderMode: RenderMode.Client},

  {path: 'News/:Target', renderMode: RenderMode.Client},
  {path: 'News/:Target/Case/:Id', renderMode: RenderMode.Client},

  {path: 'News/Detective/:UniqueName', renderMode: RenderMode.Client},
  {path: 'News/Detective/:UniqueName/Case/:Id', renderMode: RenderMode.Client},

  {path: 'News/Columnist/:UniqueName', renderMode: RenderMode.Client},
  {path: 'News/Columnist/:UniqueName/Article/:Id', renderMode: RenderMode.Client}
];

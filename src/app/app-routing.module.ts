import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'tab-chats',
    loadChildren: () => import('./tab-chats/tab-chats.module').then( m => m.TabChatsPageModule)
  },
  {
    path: 'tab-chattemplate',
    loadChildren: () => import('./tab-chattemplate/tab-chattemplate.module').then( m => m.TabChattemplatePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

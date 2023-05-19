import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'chats',
        loadChildren: () => import('../tab-chats/tab-chats.module').then(m => m.TabChatsPageModule)
      },
      {
        path: 'chattemplate',
        loadChildren: () => import('../tab-chattemplate/tab-chattemplate.module').then(m => m.TabChattemplatePageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/chats',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/chats',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}

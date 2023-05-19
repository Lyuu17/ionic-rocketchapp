import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabChattemplatePage } from './tab-chattemplate.page';

const routes: Routes = [
  {
    path: '',
    component: TabChattemplatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabChattemplatePageRoutingModule {}

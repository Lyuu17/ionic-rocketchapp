import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabChattemplatePageRoutingModule } from './tab-chattemplate-routing.module';

import { MessageTemplatePageModule } from './messagetemplate/messagetemplate.module';
import { TabChattemplatePage } from './tab-chattemplate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabChattemplatePageRoutingModule,
    MessageTemplatePageModule
  ],
  declarations: [TabChattemplatePage]
})
export class TabChattemplatePageModule {}

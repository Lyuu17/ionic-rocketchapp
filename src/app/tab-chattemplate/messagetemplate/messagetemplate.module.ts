import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { MessageTemplatePage } from './messagetemplate.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  exports: [MessageTemplatePage],
  declarations: [MessageTemplatePage]
})
export class MessageTemplatePageModule {}

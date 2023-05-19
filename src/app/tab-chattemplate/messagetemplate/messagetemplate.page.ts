import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-messagetemplate',
  template: `
    <div>
      <div *ngIf="messages.position == 0">
        <div class="flex items-end">
          <div class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
            <div>
              <span class="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">
                {{ messages.message }}

                <span class="flex justify-end mt-1"><br/>{{ messages.timestamp }}</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div *ngIf="messages.position == 1">
        <div class="flex items-end justify-end">
          <div class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
            <div>
              <span class="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white">
                {{ messages.message }}

                <span class="flex justify-end mt-1"><br/>{{ messages.timestamp }}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>`,
  styleUrls: []
})
export class MessageTemplatePage implements OnInit {

  @Input() messages: any;

  constructor() {}

  ngOnInit() {}

}

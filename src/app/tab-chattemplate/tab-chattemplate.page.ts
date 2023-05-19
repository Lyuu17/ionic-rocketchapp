import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-tab-chattemplate',
  templateUrl: './tab-chattemplate.page.html',
  styleUrls: ['./tab-chattemplate.page.scss'],
})
export class TabChattemplatePage implements OnInit, AfterViewInit {

  messages: any;

  @ViewChild(IonContent) contentView: any;
  @Input() messageInput: string;

  constructor(private activatedRoute: ActivatedRoute) {
    this.messages = [
      {
        position: 0,
        message: 'Can be verified on any platform using docker',
        timestamp: '12:00 pm'
      },
      {
        position: 1,
        message: 'Your error message says permission denied, npm global installs must be given root privileges.',
        timestamp: '14:00 pm'
      }
    ]
  }

  ngOnInit() {
    // console.log(this.activatedRoute.snapshot.queryParamMap.get("id"));
  }

  ngAfterViewInit() {
  }

  addmessage(position: number, message: string, timestamp: string) {
    if (message === undefined || message == "")
      return;

    this.messages.push({ position: position, message: message, timestamp: timestamp });
    this.messageInput = "";
    this.contentView.scrollToBottom(300);
  }

}

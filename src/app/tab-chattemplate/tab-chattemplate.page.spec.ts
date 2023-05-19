import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TabChattemplatePage } from './tab-chattemplate.page';

describe('TabChattemplatePage', () => {
  let component: TabChattemplatePage;
  let fixture: ComponentFixture<TabChattemplatePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TabChattemplatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TabChatsPage } from './tab-chats.page';

describe('TabChatsPage', () => {
  let component: TabChatsPage;
  let fixture: ComponentFixture<TabChatsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TabChatsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

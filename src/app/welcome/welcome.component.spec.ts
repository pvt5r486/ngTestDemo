import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeComponent } from './welcome.component';
import { UserService } from '../user.service';

describe('WelcomeComponent', () => {
  let component: WelcomeComponent;
  let fixture: ComponentFixture<WelcomeComponent>;
  let userServiceStub;
  let userService: UserService;
  let el: HTMLElement;
  beforeEach(() => {
    // 模擬物件
    userServiceStub = {
      isLoggedIn: true,
      user: { name: 'Test User'}
    };
    TestBed.configureTestingModule({
      declarations: [ WelcomeComponent ],
      providers: [
        { provide: UserService, useValue: userServiceStub }
      ]
    });
    fixture = TestBed.createComponent(WelcomeComponent);
    component = fixture.componentInstance;

    // 獲取注入的服務
    userService = fixture.debugElement.injector.get(UserService);
    el = fixture.nativeElement.querySelector('.welcome');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should welcome the user', () => {
    fixture.detectChanges();
    const content = el.textContent;
    expect(content).toContain('歡迎');
    expect(content).toContain('Test User');
  });

  it('should welcome "Bubba"', () => {
    // 變更姓名
    userService.user.name = 'Bubba';
    fixture.detectChanges();
    expect(el.textContent).toContain('Bubba');
  });
  it('should request login if not logged in', () => {
    userService.isLoggedIn = false;
    fixture.detectChanges();
    const content = el.textContent;
    // 檢查字串是不是不包含 "歡迎"
    expect(content).not.toContain('歡迎');
    expect(content).toBe('未授權, 請登入！');
  });
});

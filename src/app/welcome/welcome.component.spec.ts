import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { WelcomeComponent } from './welcome.component';
import { UserService } from '../user.service';
import { Observable } from 'rxjs';

describe('WelcomeComponent', () => {
  let component: WelcomeComponent;
  let fixture: ComponentFixture<WelcomeComponent>;
  let userService;
  beforeEach(() => {
    const spy = jasmine.createSpyObj('UserServiceSpy', ['getData']);
    TestBed.configureTestingModule({
      declarations: [ WelcomeComponent ],
      providers: [
        { provide: UserService, useValue: spy }
      ]
    });
    fixture = TestBed.createComponent(WelcomeComponent);
    component = fixture.componentInstance;
    userService = TestBed.get(UserService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('觸發 Click 事件後，是否有正常呼叫 getData()', () => {
    userService.getData.and.returnValue(new Observable());
    // 模擬點擊
    component.login();
    expect(userService.getData).toHaveBeenCalled();
  });
  it('未登入時元件的渲染', () => {
    const el: HTMLElement = fixture.nativeElement.querySelector('.error');
    expect(el.textContent).toContain('未授權，請登入！');
  });
  it('登入獲取資料後，元件的渲染', () => {
    const data = {
      isLoggedIn: true,
      user: 'Alvan',
      message: '歡迎登入'
    };
    component.data = data;
    fixture.detectChanges();
    const el: HTMLElement = fixture.nativeElement.querySelector('.welcome');
    expect(el.textContent).toContain(data.user);
    const btn: HTMLButtonElement = fixture.nativeElement.querySelector('button');
    expect(btn.disabled).toBeTruthy();
  });
  it('非同步測試渲染情形', fakeAsync(() => {
    let data = {
      isLoggedIn: false,
      user: '',
      message: ''
    };
    const errEl: HTMLElement = fixture.nativeElement.querySelector('.error');
    expect(errEl.textContent).toContain('未授權，請登入！');
    setTimeout(() => {
      data = {
        isLoggedIn: true,
        user: 'Alvan',
        message: '歡迎登入'
      };
      component.data = data;
      fixture.detectChanges();
    }, 3000);
    tick(3000);
    const weEl: HTMLElement = fixture.nativeElement.querySelector('.welcome');
    expect(weEl.textContent).toContain(data.user);
  }));
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LightSwichComponent } from './light-swich.component';
import { DebugElement } from '@angular/core';

describe('LightSwichComponent', () => {
  let component: LightSwichComponent;
  let fixture: ComponentFixture<LightSwichComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LightSwichComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightSwichComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });
});

describe('LightSwichComponent (minimal)', () => {
  let component: LightSwichComponent;
  let fixture: ComponentFixture<LightSwichComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ LightSwichComponent ]
    });
    fixture = TestBed.createComponent(LightSwichComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('檢查元件的元素內有沒有包含 按鈕(button)', () => {
    const elDebug: DebugElement = fixture.debugElement;
    const el: HTMLElement = elDebug.nativeElement;
    console.log(el);
    console.log(el.getElementsByTagName('button').length);
    expect(el.getElementsByTagName('button').length).toBeGreaterThan(0);
  });

});

describe('LightSwichComponent', () => {
  it('點擊 clicked() 後的狀態測試', () => {
    const comp = new LightSwichComponent();
    expect(comp.isOn).toBe(false, '一開始的狀態是 false');
    comp.clicked();
    expect(comp.isOn).toBe(true, '按下後的狀態是 true');
    comp.clicked();
    expect(comp.isOn).toBe(false, '再按一次回到 false');
  });

  it('點擊 clicked() 後 Message 會顯示 "開"', () => {
    const comp = new LightSwichComponent();
    expect(comp.getMessage()).toMatch(/關/i, '一開始的狀態是關的');
    comp.clicked();
    expect(comp.getMessage()).toMatch(/開/i, '按下後為開');
  });
});

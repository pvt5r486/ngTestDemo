import { async, ComponentFixture, TestBed, ComponentFixtureAutoDetect } from '@angular/core/testing';

import { BannerComponent } from './banner.component';
import { FormsModule } from '@angular/forms';

// describe('BannerComponent', () => {
//   let component: BannerComponent;
//   let fixture: ComponentFixture<BannerComponent>;
//   let h1: HTMLElement;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       declarations: [ BannerComponent ],
//       imports: [
//         FormsModule
//       ],
//       providers: [
//         {provide: ComponentFixtureAutoDetect, useValue: true}
//       ]
//     });
//     fixture = TestBed.createComponent(BannerComponent);
//     component = fixture.componentInstance;
//     h1 = fixture.nativeElement.querySelector('h1');
//   });

//   it('should display original title', () => {
//     // Hooray! No `fixture.detectChanges()` needed
//     expect(h1.textContent).toContain(component.title);
//   });
//   it('should still see original title after comp.title change', () => {
//     const oldTitle = component.title;
//     component.title = 'Test Title';
//     console.log('第二個測試例', h1.textContent, oldTitle);
//     // Displayed title is old because Angular didn't hear the change :(
//     expect(h1.textContent).toContain(oldTitle);
//   });
//   it('should still see original title after comp.title change', () => {
//     const oldTitle = component.title;
//     component.title = 'Test Title';
//     fixture.detectChanges();
//     console.log('第三個測試例', h1.textContent, oldTitle);
//     expect(h1.textContent).toContain(oldTitle);
//   });

//   it('比較輸入與標題是否一致', () => {
//     const hostElement = fixture.nativeElement;
//     const titleInput: HTMLInputElement = hostElement.querySelector('input');
//     const titleDisplay: HTMLElement = hostElement.querySelector('h1');

//     // 模擬使用者輸入的值
//     titleInput.value = 'DCFGBHNJK';
//     titleInput.dispatchEvent(new Event('input'));
//     fixture.detectChanges();
//     expect(titleDisplay.textContent).toBe('DCFGBHNJK');
//   });
// });

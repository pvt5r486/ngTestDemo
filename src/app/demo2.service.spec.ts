import { TestBed } from '@angular/core/testing';
import { Demo2Service } from './demo2.service';

// describe('Demo2Service', () => {
//   let masterService: jasmine.SpyObj<Demo2Service>;

//   beforeEach(() => {
//     const spy = jasmine.createSpyObj('ArrayService', ['getArray']);
//     TestBed.configureTestingModule({
//       providers: [
//         { provide: Demo2Service, useValue: spy }
//       ]
//     });
//     masterService = TestBed.get(Demo2Service);
//     console.log(masterService);
//   });
//   it('檢查語系陣列是否包含特定語系', () => {
//     const arr = ['en', 'es', 'fr'];
//     masterService.getArray.and.returnValue(arr);
//     const languages = masterService.getArray();
//     expect(languages).toContain('en');
//     expect(languages).toContain('es');
//     expect(languages).toContain('fr');
//     expect(languages.length).toEqual(3);
//   });
// });

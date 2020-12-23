import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KakaoComponent } from './kakao.component';

describe('KakaoComponent', () => {
  let component: KakaoComponent;
  let fixture: ComponentFixture<KakaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KakaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KakaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

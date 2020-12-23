import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyproduitComponent } from './myproduit.component';

describe('MyproduitComponent', () => {
  let component: MyproduitComponent;
  let fixture: ComponentFixture<MyproduitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyproduitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyproduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

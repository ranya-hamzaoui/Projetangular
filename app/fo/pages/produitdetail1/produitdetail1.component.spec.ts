import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Produitdetail1Component } from './produitdetail1.component';

describe('Produitdetail1Component', () => {
  let component: Produitdetail1Component;
  let fixture: ComponentFixture<Produitdetail1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Produitdetail1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Produitdetail1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

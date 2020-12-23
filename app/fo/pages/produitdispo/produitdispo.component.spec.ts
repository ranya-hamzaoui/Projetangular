import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitdispoComponent } from './produitdispo.component';

describe('ProduitdispoComponent', () => {
  let component: ProduitdispoComponent;
  let fixture: ComponentFixture<ProduitdispoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProduitdispoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduitdispoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

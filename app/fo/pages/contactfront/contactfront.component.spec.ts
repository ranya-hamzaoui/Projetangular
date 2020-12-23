import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactfrontComponent } from './contactfront.component';

describe('ContactfrontComponent', () => {
  let component: ContactfrontComponent;
  let fixture: ComponentFixture<ContactfrontComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactfrontComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactfrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

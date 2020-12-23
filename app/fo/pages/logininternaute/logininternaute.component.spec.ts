import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogininternauteComponent } from './logininternaute.component';

describe('LogininternauteComponent', () => {
  let component: LogininternauteComponent;
  let fixture: ComponentFixture<LogininternauteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogininternauteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogininternauteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

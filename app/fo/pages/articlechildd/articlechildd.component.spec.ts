import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlechilddComponent } from './articlechildd.component';

describe('ArticlechilddComponent', () => {
  let component: ArticlechilddComponent;
  let fixture: ComponentFixture<ArticlechilddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticlechilddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlechilddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

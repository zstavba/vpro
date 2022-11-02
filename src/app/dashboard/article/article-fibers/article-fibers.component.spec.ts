import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleFibersComponent } from './article-fibers.component';

describe('ArticleFibersComponent', () => {
  let component: ArticleFibersComponent;
  let fixture: ComponentFixture<ArticleFibersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleFibersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticleFibersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

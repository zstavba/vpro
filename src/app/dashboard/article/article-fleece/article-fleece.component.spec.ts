import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleFleeceComponent } from './article-fleece.component';

describe('ArticleFleeceComponent', () => {
  let component: ArticleFleeceComponent;
  let fixture: ComponentFixture<ArticleFleeceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleFleeceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticleFleeceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

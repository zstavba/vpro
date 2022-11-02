import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleFabricComponent } from './article-fabric.component';

describe('ArticleFabricComponent', () => {
  let component: ArticleFabricComponent;
  let fixture: ComponentFixture<ArticleFabricComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleFabricComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticleFabricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

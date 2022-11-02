import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodersHomeComponent } from './coders-home.component';

describe('CodersHomeComponent', () => {
  let component: CodersHomeComponent;
  let fixture: ComponentFixture<CodersHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodersHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodersHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashnoardHomeComponent } from './dashnoard-home.component';

describe('DashnoardHomeComponent', () => {
  let component: DashnoardHomeComponent;
  let fixture: ComponentFixture<DashnoardHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashnoardHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashnoardHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

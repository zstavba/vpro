import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandPaleteComponent } from './command-palete.component';

describe('CommandPaleteComponent', () => {
  let component: CommandPaleteComponent;
  let fixture: ComponentFixture<CommandPaleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommandPaleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommandPaleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

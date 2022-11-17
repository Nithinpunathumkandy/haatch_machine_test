import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalNotesComponent } from './digital-notes.component';

describe('DigitalNotesComponent', () => {
  let component: DigitalNotesComponent;
  let fixture: ComponentFixture<DigitalNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigitalNotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

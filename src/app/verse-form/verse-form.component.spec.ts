import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerseFormComponent } from './verse-form.component';

describe('VerseFormComponent', () => {
  let component: VerseFormComponent;
  let fixture: ComponentFixture<VerseFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerseFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

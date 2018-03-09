import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerseCompComponent } from './verse-comp.component';

describe('VerseCompComponent', () => {
  let component: VerseCompComponent;
  let fixture: ComponentFixture<VerseCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerseCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerseCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

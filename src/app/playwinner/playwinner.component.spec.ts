import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaywinnerComponent } from './playwinner.component';

describe('PlaywinnerComponent', () => {
  let component: PlaywinnerComponent;
  let fixture: ComponentFixture<PlaywinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaywinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaywinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

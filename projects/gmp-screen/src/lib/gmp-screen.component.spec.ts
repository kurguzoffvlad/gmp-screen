import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GmpScreenComponent } from './gmp-screen.component';

describe('GmpScreenComponent', () => {
  let component: GmpScreenComponent;
  let fixture: ComponentFixture<GmpScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GmpScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GmpScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

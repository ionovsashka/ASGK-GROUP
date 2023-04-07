import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PushWindowComponent } from './push-window.component';

describe('PushWindowComponent', () => {
  let component: PushWindowComponent;
  let fixture: ComponentFixture<PushWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PushWindowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PushWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

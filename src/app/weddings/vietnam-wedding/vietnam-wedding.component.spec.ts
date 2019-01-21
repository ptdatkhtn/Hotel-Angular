import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VietnamWeddingComponent } from './vietnam-wedding.component';

describe('VietnamWeddingComponent', () => {
  let component: VietnamWeddingComponent;
  let fixture: ComponentFixture<VietnamWeddingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VietnamWeddingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VietnamWeddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

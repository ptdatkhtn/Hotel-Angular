import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WesternsWeddingComponent } from './westerns-wedding.component';

describe('WesternsWeddingComponent', () => {
  let component: WesternsWeddingComponent;
  let fixture: ComponentFixture<WesternsWeddingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WesternsWeddingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WesternsWeddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

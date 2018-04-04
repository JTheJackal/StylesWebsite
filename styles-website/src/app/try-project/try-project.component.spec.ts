import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TryProjectComponent } from './try-project.component';

describe('TryProjectComponent', () => {
  let component: TryProjectComponent;
  let fixture: ComponentFixture<TryProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TryProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TryProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

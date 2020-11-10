import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PellerinListComponent } from './pellerin-list.component';

describe('PellerinListComponent', () => {
  let component: PellerinListComponent;
  let fixture: ComponentFixture<PellerinListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PellerinListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PellerinListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

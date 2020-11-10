import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePellerinComponent } from './create-pellerin.component';

describe('CreatePellerinComponent', () => {
  let component: CreatePellerinComponent;
  let fixture: ComponentFixture<CreatePellerinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePellerinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePellerinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

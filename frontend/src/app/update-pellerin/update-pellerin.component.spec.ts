import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePellerinComponent } from './update-pellerin.component';

describe('UpdatePellerinComponent', () => {
  let component: UpdatePellerinComponent;
  let fixture: ComponentFixture<UpdatePellerinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatePellerinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePellerinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

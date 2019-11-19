import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleDrivenComponent } from './module-driven.component';

describe('ModuleDrivenComponent', () => {
  let component: ModuleDrivenComponent;
  let fixture: ComponentFixture<ModuleDrivenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuleDrivenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleDrivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagecategoriaComponent } from './managecategoria.component';

describe('ManagecategoriaComponent', () => {
  let component: ManagecategoriaComponent;
  let fixture: ComponentFixture<ManagecategoriaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManagecategoriaComponent]
    });
    fixture = TestBed.createComponent(ManagecategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

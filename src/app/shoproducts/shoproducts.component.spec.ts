import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoproductsComponent } from './shoproducts.component';

describe('ShoproductsComponent', () => {
  let component: ShoproductsComponent;
  let fixture: ComponentFixture<ShoproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoproductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

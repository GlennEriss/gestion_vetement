import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupprimerSellerComponent } from './supprimer-seller.component';

describe('SupprimerSellerComponent', () => {
  let component: SupprimerSellerComponent;
  let fixture: ComponentFixture<SupprimerSellerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupprimerSellerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SupprimerSellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

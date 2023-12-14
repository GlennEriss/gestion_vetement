import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterSellerComponent } from './ajouter-seller.component';

describe('AjouterSellerComponent', () => {
  let component: AjouterSellerComponent;
  let fixture: ComponentFixture<AjouterSellerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AjouterSellerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AjouterSellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

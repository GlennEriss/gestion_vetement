import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierSellerComponent } from './modifier-seller.component';

describe('ModifierSellerComponent', () => {
  let component: ModifierSellerComponent;
  let fixture: ComponentFixture<ModifierSellerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifierSellerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModifierSellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

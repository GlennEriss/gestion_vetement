import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierVetementComponent } from './modifier-vetement.component';

describe('ModifierVetementComponent', () => {
  let component: ModifierVetementComponent;
  let fixture: ComponentFixture<ModifierVetementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifierVetementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModifierVetementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

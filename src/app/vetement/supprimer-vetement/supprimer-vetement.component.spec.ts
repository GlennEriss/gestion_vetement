import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupprimerVetementComponent } from './supprimer-vetement.component';

describe('SupprimerVetementComponent', () => {
  let component: SupprimerVetementComponent;
  let fixture: ComponentFixture<SupprimerVetementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupprimerVetementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SupprimerVetementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

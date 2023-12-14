import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterVetementComponent } from './ajouter-vetement.component';

describe('AjouterVetementComponent', () => {
  let component: AjouterVetementComponent;
  let fixture: ComponentFixture<AjouterVetementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AjouterVetementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AjouterVetementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

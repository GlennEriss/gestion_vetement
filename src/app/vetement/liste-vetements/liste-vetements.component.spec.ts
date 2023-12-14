import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeVetementsComponent } from './liste-vetements.component';

describe('ListeVetementsComponent', () => {
  let component: ListeVetementsComponent;
  let fixture: ComponentFixture<ListeVetementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeVetementsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListeVetementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

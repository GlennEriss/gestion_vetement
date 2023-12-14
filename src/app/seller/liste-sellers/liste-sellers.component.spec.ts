import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeSellersComponent } from './liste-sellers.component';

describe('ListeSellersComponent', () => {
  let component: ListeSellersComponent;
  let fixture: ComponentFixture<ListeSellersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeSellersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListeSellersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

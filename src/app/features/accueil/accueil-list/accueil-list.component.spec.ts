import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilListComponent } from './accueil-list.component';

describe('AccueilListComponent', () => {
  let component: AccueilListComponent;
  let fixture: ComponentFixture<AccueilListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccueilListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccueilListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

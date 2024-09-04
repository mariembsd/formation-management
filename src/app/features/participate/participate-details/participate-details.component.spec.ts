import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipateDetailsComponent } from './participate-details.component';

describe('ParticipateDetailsComponent', () => {
  let component: ParticipateDetailsComponent;
  let fixture: ComponentFixture<ParticipateDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParticipateDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParticipateDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TrainingManagementListComponent } from './training-management-list.component';

describe('TrainingManagementComponent', () => {
  let component: TrainingManagementListComponent;
  let fixture: ComponentFixture<TrainingManagementListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrainingManagementListComponent] // Import the component directly
    }).compileComponents();

    fixture = TestBed.createComponent(TrainingManagementListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

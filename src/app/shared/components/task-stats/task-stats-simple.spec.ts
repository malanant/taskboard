import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskStatsComponent } from './task-stats';
import { of } from 'rxjs';

describe('TaskStatsComponent', () => {
  let component: TaskStatsComponent;
  let fixture: ComponentFixture<TaskStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskStatsComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TaskStatsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display stats when data is provided', () => {
    component.stats$ = of({
      total: 10,
      completed: 3,
      active: 7,
      percentage: 30
    });
    fixture.detectChanges();
    
    const container = fixture.nativeElement.querySelector('.stats-container');
    expect(container).toBeTruthy();
  });

  it('should set progress bar width correctly', () => {
    component.stats$ = of({
      total: 10,
      completed: 7,
      active: 3,
      percentage: 70
    });
    fixture.detectChanges();
    
    const progressFill = fixture.nativeElement.querySelector('.progress-fill');
    expect(progressFill.style.width).toBe('70%');
  });
});

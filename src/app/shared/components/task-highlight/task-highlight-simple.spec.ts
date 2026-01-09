import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskHighlightComponent } from './task-highlight';

describe('TaskHighlightComponent', () => {
  let component: TaskHighlightComponent;
  let fixture: ComponentFixture<TaskHighlightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskHighlightComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TaskHighlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display title in badge', () => {
    component.title = 'Ma tâche';
    fixture.detectChanges();
    
    const badgeElement = fixture.nativeElement.querySelector('.highlight-badge');
    expect(badgeElement).toBeTruthy();
    expect(badgeElement.textContent).toContain('Ma tâche');
    expect(badgeElement.textContent).toContain('⭐');
  });
});

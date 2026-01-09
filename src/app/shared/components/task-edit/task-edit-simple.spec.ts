import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskEditComponent } from './task-edit';

describe('TaskEditComponent', () => {
  let component: TaskEditComponent;
  let fixture: ComponentFixture<TaskEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskEditComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TaskEditComponent);
    component = fixture.componentInstance;
    component.taskTitle = 'Tâche test';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render modal', () => {
    const modal = fixture.nativeElement.querySelector('.edit-modal');
    expect(modal).toBeTruthy();
  });

  it('should emit save event when save is clicked', () => {
    spyOn(component.save, 'emit');
    component.editTitle = 'Nouveau titre';
    component.onSave();
    expect(component.save.emit).toHaveBeenCalledWith('Nouveau titre');
  });
});

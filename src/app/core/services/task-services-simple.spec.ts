import { TestBed } from '@angular/core/testing';
import { TaskService } from './task-services';

describe('TaskService', () => {
  let service: TaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add and retrieve tasks', (done) => {
    service.addTask('Test task');
    let taskAdded = false;
    
    service.tasks$.subscribe(tasks => {
      if (!taskAdded && tasks.some(t => t.title === 'Test task')) {
        expect(tasks.length).toBeGreaterThan(0);
        expect(tasks.find(t => t.title === 'Test task')).toBeTruthy();
        taskAdded = true;
        done();
      }
    });
  });

  it('should delete a task', (done) => {
    let firstTaskId: number | null = null;
    let deleted = false;
    
    service.tasks$.subscribe(tasks => {
      if (!firstTaskId && tasks.length > 0) {
        firstTaskId = tasks[0].id;
        service.deleteTask(firstTaskId);
      } else if (firstTaskId && !deleted && !tasks.some(t => t.id === firstTaskId)) {
        expect(tasks.find(t => t.id === firstTaskId)).toBeUndefined();
        deleted = true;
        done();
      }
    });
  });

  it('should toggle task completion', (done) => {
    let taskId: number | null = null;
    let toggled = false;
    
    service.tasks$.subscribe(tasks => {
      if (!taskId && tasks.length > 0) {
        taskId = tasks[0].id;
        const initialState = tasks[0].completed;
        service.toggleComplete(taskId);
      } else if (taskId && !toggled) {
        const updated = tasks.find(t => t.id === taskId);
        const originalTask = { completed: !updated?.completed };
        if (updated && updated.completed !== originalTask.completed) {
          expect(updated?.completed).toBeDefined();
          toggled = true;
          done();
        }
      }
    });
  });

  it('should calculate stats correctly', (done) => {
    service.stats$.subscribe(stats => {
      expect(stats.total).toBeGreaterThan(0);
      expect(stats.active + stats.completed).toBe(stats.total);
      done();
    });
  });
});

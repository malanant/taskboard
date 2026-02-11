import {
  TaskService,
  init_task_services
} from "./chunk-SD4R5LCC.js";
import {
  TestBed,
  init_testing
} from "./chunk-TEVXXR43.js";
import "./chunk-TTULUY32.js";

// src/app/core/services/task-services-simple.spec.ts
init_testing();
init_task_services();
describe("TaskService", () => {
  let service;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskService);
  });
  it("should be created", () => {
    expect(service).toBeTruthy();
  });
  it("should add and retrieve tasks", (done) => {
    service.addTask("Test task");
    service.tasks$.subscribe((tasks) => {
      expect(tasks.length).toBeGreaterThan(0);
      expect(tasks[tasks.length - 1].title).toBe("Test task");
      done();
    });
  });
  it("should delete a task", (done) => {
    service.tasks$.subscribe((tasks) => {
      const taskId = tasks[0].id;
      service.deleteTask(taskId);
      service.tasks$.subscribe((updatedTasks) => {
        expect(updatedTasks.find((t) => t.id === taskId)).toBeUndefined();
        done();
      });
    });
  });
  it("should toggle task completion", (done) => {
    service.tasks$.subscribe((tasks) => {
      const task = tasks[0];
      const initialState = task.completed;
      service.toggleComplete(task.id);
      service.tasks$.subscribe((updatedTasks) => {
        const updated = updatedTasks.find((t) => t.id === task.id);
        expect(updated?.completed).toBe(!initialState);
        done();
      });
    });
  });
  it("should calculate stats correctly", (done) => {
    service.stats$.subscribe((stats) => {
      expect(stats.total).toBeGreaterThan(0);
      expect(stats.active + stats.completed).toBe(stats.total);
      done();
    });
  });
});
//# sourceMappingURL=spec-task-services-simple.spec.js.map

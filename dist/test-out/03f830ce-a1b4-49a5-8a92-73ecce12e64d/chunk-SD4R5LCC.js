import {
  BehaviorSubject,
  Injectable,
  __decorate,
  init_core,
  init_esm,
  init_operators,
  init_tslib_es6,
  map,
  tap
} from "./chunk-TEVXXR43.js";
import {
  __esm,
  __spreadProps,
  __spreadValues
} from "./chunk-TTULUY32.js";

// src/app/core/services/task-services.ts
var TaskService;
var init_task_services = __esm({
  "src/app/core/services/task-services.ts"() {
    "use strict";
    init_tslib_es6();
    init_core();
    init_esm();
    init_operators();
    TaskService = class TaskService2 {
      tasks = [
        { id: 1, title: "Apprendre Angular", highlighted: false, completed: false },
        { id: 2, title: "Cr\xE9er TaskBoard Pro", highlighted: false, completed: false }
      ];
      tasksSubject = new BehaviorSubject(this.tasks);
      tasks$ = this.tasksSubject.asObservable().pipe(tap((tasks) => console.log("\u{1F4CB} T\xE2ches mises \xE0 jour:", tasks.length, "t\xE2ches")));
      // Observable des tâches actives (non terminées)
      activeTasks$ = this.tasks$.pipe(map((tasks) => tasks.filter((t) => !t.completed)));
      // Observable des tâches terminées
      completedTasks$ = this.tasks$.pipe(map((tasks) => tasks.filter((t) => t.completed)));
      // Observable des statistiques
      stats$ = this.tasks$.pipe(map((tasks) => ({
        total: tasks.length,
        completed: tasks.filter((t) => t.completed).length,
        active: tasks.filter((t) => !t.completed).length,
        percentage: tasks.length > 0 ? Math.round(tasks.filter((t) => t.completed).length / tasks.length * 100) : 0
      })));
      addTask(title) {
        if (!title?.trim())
          return;
        const newTask = { id: Date.now(), title: title.trim(), highlighted: false, completed: false };
        this.tasks.push(newTask);
        this.tasksSubject.next([...this.tasks]);
      }
      deleteTask(id) {
        this.tasks = this.tasks.filter((task) => task.id !== id);
        this.tasksSubject.next([...this.tasks]);
      }
      toggleHighlight(id) {
        const updatedTasks = this.tasks.map((task) => task.id === id ? __spreadProps(__spreadValues({}, task), { highlighted: !task.highlighted }) : task);
        this.tasks = updatedTasks;
        this.tasksSubject.next([...this.tasks]);
      }
      toggleComplete(id) {
        const updatedTasks = this.tasks.map((task) => task.id === id ? __spreadProps(__spreadValues({}, task), { completed: !task.completed }) : task);
        this.tasks = updatedTasks;
        this.tasksSubject.next([...this.tasks]);
      }
      updateTask(id, title) {
        const updatedTasks = this.tasks.map((task) => task.id === id ? __spreadProps(__spreadValues({}, task), { title: title.trim() }) : task);
        this.tasks = updatedTasks;
        this.tasksSubject.next([...this.tasks]);
      }
    };
    TaskService = __decorate([
      Injectable({
        providedIn: "root"
      })
    ], TaskService);
  }
});

export {
  TaskService,
  init_task_services
};
//# sourceMappingURL=chunk-SD4R5LCC.js.map

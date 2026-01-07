import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap, filter } from 'rxjs/operators';

export interface Task {
  id: number;
  title: string;
  highlighted?: boolean;
  completed?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = [
    { id: 1, title: 'Apprendre Angular', highlighted: false, completed: false },
    { id: 2, title: 'Créer TaskBoard Pro', highlighted: false, completed: false }
  ];

  private tasksSubject = new BehaviorSubject<Task[]>(this.tasks);
  tasks$ = this.tasksSubject.asObservable().pipe(
    tap(tasks => console.log('📋 Tâches mises à jour:', tasks.length, 'tâches'))
  );

  // Observable des tâches actives (non terminées)
  activeTasks$ = this.tasks$.pipe(
    map(tasks => tasks.filter(t => !t.completed))
  );

  // Observable des tâches terminées
  completedTasks$ = this.tasks$.pipe(
    map(tasks => tasks.filter(t => t.completed))
  );

  // Observable des statistiques
  stats$ = this.tasks$.pipe(
    map(tasks => ({
      total: tasks.length,
      completed: tasks.filter(t => t.completed).length,
      active: tasks.filter(t => !t.completed).length,
      percentage: tasks.length > 0 ? Math.round((tasks.filter(t => t.completed).length / tasks.length) * 100) : 0
    }))
  );

  addTask(title: string) {
    if (!title?.trim()) return;
    const newTask: Task = { id: Date.now(), title: title.trim(), highlighted: false, completed: false };
    this.tasks.push(newTask);
    this.tasksSubject.next([...this.tasks]);
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter(task => task.id !== id);
    this.tasksSubject.next([...this.tasks]);
  }

  toggleHighlight(id: number) {
    const updatedTasks = this.tasks.map(task =>
      task.id === id ? { ...task, highlighted: !task.highlighted } : task
    );
    this.tasks = updatedTasks;
    this.tasksSubject.next([...this.tasks]);
  }

  toggleComplete(id: number) {
    const updatedTasks = this.tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    this.tasks = updatedTasks;
    this.tasksSubject.next([...this.tasks]);
  }

  updateTask(id: number, title: string) {
    const updatedTasks = this.tasks.map(task =>
      task.id === id ? { ...task, title: title.trim() } : task
    );
    this.tasks = updatedTasks;
    this.tasksSubject.next([...this.tasks]);
  }
}
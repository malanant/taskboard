import { Component, inject, ViewContainerRef, QueryList, ViewChildren, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService } from '../core/services/task-services';
import { NotificationService } from '../core/services/notification.service';
import { TaskHighlightComponent } from '../shared/components/task-highlight/task-highlight';
import { TaskEditComponent } from '../shared/components/task-edit/task-edit';
import { TaskStatsComponent } from '../shared/components/task-stats/task-stats';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, TaskStatsComponent, TaskEditComponent],
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
})
export class Home implements AfterViewInit {
  private taskService = inject(TaskService);
  private notificationService = inject(NotificationService);
  
  tasks$ = this.taskService.tasks$;
  stats$ = this.taskService.stats$;
  
  // État du modal d'édition
  editingTaskId: number | null = null;
  editingTaskTitle: string | null = null;
  
  @ViewChildren('highlightContainer', { read: ViewContainerRef })
  highlightContainers!: QueryList<ViewContainerRef>;

  constructor() {
    // Utiliser tap() avec notifications via le service Task
    this.taskService.tasks$.subscribe({
      next: (tasks) => {
        console.log('✅ Observable émis avec', tasks.length, 'tâches');
      }
    });
  }

  ngAfterViewInit() {
    this.tasks$.subscribe(() => {
      this.updateHighlights();
    });
  }

  addTask(title: string) {
    if (title?.trim()) {
      this.taskService.addTask(title.trim());
      this.notificationService.success(`✅ Tâche "${title}" ajoutée !`);
    }
  }

  deleteTask(id: number) {
    this.taskService.deleteTask(id);
    this.notificationService.success('🗑️ Tâche supprimée !');
  }

  toggleComplete(id: number) {
    this.taskService.toggleComplete(id);
    this.notificationService.success('✔️ État de la tâche mis à jour !');
  }

  toggleHighlight(id: number) {
    this.taskService.toggleHighlight(id);
  }

  openEditModal(taskId: number, title: string) {
    this.editingTaskId = taskId;
    this.editingTaskTitle = title;
  }

  saveTaskEdit(newTitle: string) {
    if (this.editingTaskId !== null && newTitle.trim()) {
      this.taskService.updateTask(this.editingTaskId, newTitle);
      this.notificationService.success('✏️ Tâche modifiée !');
    }
    this.cancelTaskEdit();
  }

  cancelTaskEdit() {
    this.editingTaskId = null;
    this.editingTaskTitle = null;
  }

  private updateHighlights() {
    if (!this.highlightContainers) return;
    
    this.highlightContainers.forEach((container) => {
      container.clear();
    });
  }

  createHighlightComponent(container: ViewContainerRef, taskTitle: string) {
    container.clear();
    const componentRef = container.createComponent(TaskHighlightComponent);
    componentRef.instance.title = taskTitle;
  }
}

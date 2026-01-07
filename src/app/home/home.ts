import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService } from '../core/services/task-services';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
})
export class Home {
  private taskService = inject(TaskService);
  tasks$ = this.taskService.tasks$;

  addTask(title: string) {
    if (title.trim()) {
      this.taskService.addTask(title);
    }
  }
}

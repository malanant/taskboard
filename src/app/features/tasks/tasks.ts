import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService } from '../../core/services/task-services';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tasks.html',
  styleUrls: ['./tasks.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Tasks {
  tasks$!: Observable<any[]>;

  constructor(private taskService: TaskService) {
    this.tasks$ = this.taskService.tasks$ as Observable<any[]>;
  }

  addTask(title: string) {
    if (title?.trim()) {
      this.taskService.addTask(title.trim());
    }
  }
}

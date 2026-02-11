import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

export interface TaskStats {
  total: number;
  completed: number;
  active: number;
  percentage: number;
}

@Component({
  selector: 'app-task-stats',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (stats$ | async; as stats) {
      <div class="stats-container">
        <div class="stat-card">
          <div class="stat-value">{{ stats.total }}</div>
          <div class="stat-label">Total</div>
        </div>
        <div class="stat-card">
          <div class="stat-value completed">{{ stats.completed }}</div>
          <div class="stat-label">Terminées</div>
        </div>
        <div class="stat-card">
          <div class="stat-value active">{{ stats.active }}</div>
          <div class="stat-label">En cours</div>
        </div>
        <div class="stat-card progress">
          <div class="stat-value">{{ stats.percentage }}%</div>
          <div class="progress-bar">
            <div class="progress-fill" [style.width.%]="stats.percentage"></div>
          </div>
        </div>
      </div>
    }
  `,
  styles: [`
    .stats-container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
      gap: 12px;
      margin-top: 24px;
      margin-bottom: 24px;
    }

    .stat-card {
      background: linear-gradient(135deg, #ecf0f1, #f8f9fa);
      padding: 16px;
      border-radius: 8px;
      border: 1px solid #e0e6ed;
      text-align: center;
      transition: all 0.3s ease;

      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      }

      &.progress {
        grid-column: 1 / -1;
      }
    }

    .stat-value {
      font-size: 24px;
      font-weight: bold;
      color: #3498db;
      margin-bottom: 6px;

      &.completed {
        color: #27ae60;
      }

      &.active {
        color: #f39c12;
      }
    }

    .stat-label {
      font-size: 12px;
      color: #7f8c8d;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .progress-bar {
      width: 100%;
      height: 8px;
      background: #ecf0f1;
      border-radius: 4px;
      margin-top: 8px;
      overflow: hidden;
    }

    .progress-fill {
      height: 100%;
      background: linear-gradient(90deg, #27ae60, #2ecc71);
      border-radius: 4px;
      transition: width 0.3s ease;
    }
  `]
})
export class TaskStatsComponent {
  @Input() stats$!: Observable<TaskStats>;
}

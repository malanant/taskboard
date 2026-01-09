import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationService } from '../../../core/services/notification.service';

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="notifications-container">
      @if (notificationService.notifications$ | async; as notifications) {
        @for (notification of notifications; track notification.id) {
          <div class="notification" [ngClass]="'notification-' + notification.type">
            {{ notification.message }}
          </div>
        }
      }
    </div>
  `,
  styles: [`
    .notifications-container {
      position: fixed;
      top: 20px;
      right: 20px;
      z-index: 9999;
      max-width: 400px;
    }

    .notification {
      padding: 12px 16px;
      margin-bottom: 10px;
      border-radius: 6px;
      background: white;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      animation: slideInRight 0.3s ease-out;
      font-size: 14px;
      font-weight: 500;

      &.notification-success {
        background: #d4edda;
        color: #155724;
        border-left: 4px solid #28a745;
      }

      &.notification-error {
        background: #f8d7da;
        color: #721c24;
        border-left: 4px solid #dc3545;
      }

      &.notification-info {
        background: #d1ecf1;
        color: #0c5460;
        border-left: 4px solid #17a2b8;
      }

      &.notification-warning {
        background: #fff3cd;
        color: #856404;
        border-left: 4px solid #ffc107;
      }
    }

    @keyframes slideInRight {
      from {
        opacity: 0;
        transform: translateX(100%);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }
  `]
})
export class NotificationsComponent {
  notificationService = inject(NotificationService);
}

import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-highlight',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="highlight-badge">
      ⭐ {{ title }} est à l'honneur!
    </div>
  `,
  styles: [`
    .highlight-badge {
      position: absolute;
      top: -30px;
      left: 0;
      background: linear-gradient(135deg, #ffd700, #ffed4e);
      color: #333;
      padding: 6px 12px;
      border-radius: 20px;
      font-weight: bold;
      font-size: 12px;
      white-space: nowrap;
      box-shadow: 0 2px 8px rgba(255, 215, 0, 0.5);
      animation: fadeInScale 0.3s ease-in-out;
    }

    @keyframes fadeInScale {
      from {
        opacity: 0;
        transform: scale(0.8);
      }
      to {
        opacity: 1;
        transform: scale(1);
      }
    }
  `]
})
export class TaskHighlightComponent {
  @Input() title: string = '';
}

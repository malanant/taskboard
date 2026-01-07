import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-edit',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="edit-modal-overlay" (click)="onCancel()">
      <div class="edit-modal" (click)="$event.stopPropagation()">
        <h3>Éditer la tâche</h3>
        <input 
          [(ngModel)]="editTitle" 
          placeholder="Titre de la tâche"
          (keyup.enter)="onSave()"
          autofocus
        >
        <div class="edit-actions">
          <button class="btn-cancel" (click)="onCancel()">Annuler</button>
          <button class="btn-save" (click)="onSave()">Enregistrer</button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .edit-modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
    }

    .edit-modal {
      background: white;
      padding: 24px;
      border-radius: 12px;
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
      min-width: 320px;
      animation: slideIn 0.3s ease-out;
    }

    @keyframes slideIn {
      from {
        opacity: 0;
        transform: translateY(-20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    h3 {
      margin: 0 0 16px 0;
      color: #2c3e50;
      font-size: 18px;
    }

    input {
      width: 100%;
      padding: 10px;
      border: 2px solid #ecf0f1;
      border-radius: 6px;
      font-size: 14px;
      margin-bottom: 16px;
      box-sizing: border-box;

      &:focus {
        outline: none;
        border-color: #3498db;
        box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.1);
      }
    }

    .edit-actions {
      display: flex;
      gap: 10px;
      justify-content: flex-end;
    }

    button {
      padding: 8px 16px;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      font-weight: 600;
      transition: all 0.2s ease;

      &.btn-cancel {
        background: #ecf0f1;
        color: #2c3e50;

        &:hover {
          background: #bdc3c7;
        }
      }

      &.btn-save {
        background: #27ae60;
        color: white;

        &:hover {
          background: #229954;
          transform: translateY(-1px);
        }
      }
    }
  `]
})
export class TaskEditComponent implements OnInit {
  @Input() taskTitle: string = '';
  @Output() save = new EventEmitter<string>();
  @Output() cancel = new EventEmitter<void>();

  editTitle: string = '';

  ngOnInit() {
    this.editTitle = this.taskTitle;
  }

  onSave() {
    if (this.editTitle.trim()) {
      this.save.emit(this.editTitle.trim());
    }
  }

  onCancel() {
    this.cancel.emit();
  }
}

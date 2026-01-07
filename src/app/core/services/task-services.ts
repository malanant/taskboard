import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks = [
    { id: 1, title: 'Apprendre Angular' },
    { id: 2, title: 'Créer TaskBoard Pro' }
  ];

  getTasks() {
    return of(this.tasks).pipe(delay(2000));
  }
}
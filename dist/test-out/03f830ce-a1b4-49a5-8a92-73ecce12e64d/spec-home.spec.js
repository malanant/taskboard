import {
  TaskHighlightComponent,
  init_task_highlight
} from "./chunk-KHCWHQ7T.js";
import {
  TaskStatsComponent,
  init_task_stats
} from "./chunk-PDNQV4BJ.js";
import {
  NotificationService,
  init_notification_service
} from "./chunk-KM6STP66.js";
import {
  TaskService,
  init_task_services
} from "./chunk-SD4R5LCC.js";
import {
  TaskEditComponent,
  init_task_edit
} from "./chunk-XNOKQ7JQ.js";
import {
  CommonModule,
  init_common
} from "./chunk-ZGE2EXLE.js";
import {
  Component,
  TestBed,
  ViewChildren,
  ViewContainerRef,
  __decorate,
  init_core,
  init_testing,
  init_tslib_es6,
  inject
} from "./chunk-TEVXXR43.js";
import {
  __async,
  __commonJS,
  __esm
} from "./chunk-TTULUY32.js";

// angular:jit:template:src\app\home\home.html
var home_default;
var init_home = __esm({
  "angular:jit:template:src\\app\\home\\home.html"() {
    home_default = `<div class="home-content">\r
  <h2>Mes t\xE2ches</h2>\r
\r
  <!-- Composant de statistiques -->\r
  <app-task-stats [stats$]="stats$"></app-task-stats>\r
\r
  <!-- Formulaire d'ajout -->\r
  <div class="task-input-section">\r
    <input \r
      #taskInput \r
      placeholder="Ajouter une nouvelle t\xE2che..."\r
      (keyup.enter)="addTask(taskInput.value); taskInput.value = ''"\r
    >\r
    <button (click)="addTask(taskInput.value); taskInput.value = ''">\r
      Ajouter\r
    </button>\r
  </div>\r
\r
  <!-- Liste des t\xE2ches -->\r
  @if (tasks$ | async; as tasks) {\r
    @if (tasks.length > 0) {\r
      <ul>\r
        @for (task of tasks; track task.id) {\r
          <li [class.highlighted]="task.highlighted" [class.completed]="task.completed">\r
            <div class="task-content">\r
              <span class="task-title" [class.strike]="task.completed">{{ task.title }}</span>\r
              <div class="task-actions">\r
                <button \r
                  class="btn-complete" \r
                  (click)="toggleComplete(task.id)"\r
                  [class.active]="task.completed"\r
                  title="Marquer comme termin\xE9e"\r
                >\r
                  \u2713\r
                </button>\r
                <button \r
                  class="btn-highlight" \r
                  (click)="toggleHighlight(task.id)"\r
                  [class.active]="task.highlighted"\r
                  title="Mettre en avant"\r
                >\r
                  \u2B50\r
                </button>\r
                <button \r
                  class="btn-edit" \r
                  (click)="openEditModal(task.id, task.title)"\r
                  title="\xC9diter"\r
                >\r
                  \u270F\uFE0F\r
                </button>\r
                <button \r
                  class="btn-delete" \r
                  (click)="deleteTask(task.id)"\r
                  title="Supprimer"\r
                >\r
                  \u{1F5D1}\uFE0F\r
                </button>\r
              </div>\r
            </div>\r
            <!-- Containers pour injection dynamique -->\r
            <div #highlightContainer></div>\r
          </li>\r
        }\r
      </ul>\r
    } @else {\r
      <div class="empty-state">\r
        <p>\u{1F4CB} Aucune t\xE2che pour le moment. Cr\xE9ez-en une !</p>\r
      </div>\r
    }\r
  } @else {\r
    <div class="loading">\r
      Chargement de vos t\xE2ches...\r
    </div>\r
  }\r
\r
  <!-- Modal d'\xE9dition (affich\xE9 d\xE9clarativement) -->\r
  @if (editingTaskId !== null && editingTaskTitle !== null) {\r
    <app-task-edit \r
      [taskTitle]="editingTaskTitle"\r
      (save)="saveTaskEdit($event)"\r
      (cancel)="cancelTaskEdit()"\r
    ></app-task-edit>\r
  }\r
\r
</div>`;
  }
});

// angular:jit:style:src\app\home\home.scss
var home_default2;
var init_home2 = __esm({
  "angular:jit:style:src\\app\\home\\home.scss"() {
    home_default2 = "/* src/app/home/home.scss */\n.home-content {\n  max-width: 760px;\n  margin: 0 auto;\n  padding: 36px 24px;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(52, 152, 219, 0.03),\n      rgba(46, 204, 113, 0.02));\n  border-radius: 12px;\n  box-shadow: 0 8px 30px rgba(18, 52, 76, 0.06);\n}\n.home-content h2 {\n  color: #0f3b57;\n  font-size: 30px;\n  margin-bottom: 18px;\n  text-align: left;\n  font-weight: 700;\n  background:\n    linear-gradient(\n      90deg,\n      #2bb6ff,\n      #28e0a4);\n  -webkit-background-clip: text;\n  background-clip: text;\n  color: transparent;\n}\n.home-content p {\n  color: #2b4858;\n  text-align: left;\n  font-size: 14px;\n  margin-bottom: 18px;\n}\n.task-input-section {\n  display: flex;\n  gap: 12px;\n  margin-bottom: 20px;\n}\n.task-input-section input {\n  flex: 1;\n  padding: 12px 16px;\n  border: 1px solid rgba(15, 59, 87, 0.08);\n  border-radius: 10px;\n  font-size: 14px;\n  transition: all 0.22s ease;\n  background: rgba(255, 255, 255, 0.9);\n}\n.task-input-section input:focus {\n  outline: none;\n  box-shadow: 0 6px 18px rgba(43, 126, 166, 0.08);\n  border-color: rgba(40, 224, 164, 0.45);\n}\n.task-input-section input::placeholder {\n  color: #9fb6bf;\n}\n.task-input-section button {\n  padding: 10px 20px;\n  background:\n    linear-gradient(\n      135deg,\n      #23a6d5,\n      #2ee6a5);\n  color: white;\n  border: none;\n  border-radius: 10px;\n  font-weight: 700;\n  cursor: pointer;\n  transition: transform 0.18s ease, box-shadow 0.18s ease;\n  box-shadow: 0 6px 18px rgba(35, 166, 213, 0.18);\n}\n.task-input-section button:hover {\n  transform: translateY(-3px);\n}\n.task-input-section button:active {\n  transform: translateY(0);\n}\nul {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\nul li {\n  background:\n    linear-gradient(\n      90deg,\n      rgba(255, 255, 255, 0.98),\n      rgba(245, 255, 250, 0.98));\n  padding: 16px 20px;\n  margin-bottom: 14px;\n  border-radius: 12px;\n  border-left: 6px solid rgba(43, 142, 173, 0.12);\n  box-shadow: 0 8px 24px rgba(18, 52, 76, 0.04);\n  transition: all 0.25s ease;\n  color: #12323f;\n  font-size: 15px;\n  position: relative;\n}\nul li:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 14px 40px rgba(18, 52, 76, 0.06);\n}\nul li.highlighted {\n  border-left-color: #2ee6a5;\n  background:\n    linear-gradient(\n      90deg,\n      rgba(46, 204, 113, 0.06),\n      rgba(43, 142, 173, 0.02));\n}\nul li.completed {\n  background:\n    linear-gradient(\n      90deg,\n      rgba(220, 230, 235, 0.6),\n      rgba(245, 250, 250, 0.6));\n  opacity: 0.85;\n  border-left-color: #95a5a6;\n}\nul li .task-content {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n}\nul li .task-title {\n  flex: 1;\n  font-weight: 600;\n  color: #0f3b57;\n}\nul li .task-title.strike {\n  text-decoration: line-through;\n  color: #7f8c8d;\n  font-weight: 500;\n}\nul li .task-actions {\n  display: flex;\n  gap: 8px;\n}\nul li button {\n  border: none;\n  background: transparent;\n  cursor: pointer;\n  font-size: 16px;\n  padding: 6px;\n  border-radius: 8px;\n}\nul li .btn-complete {\n  color: #27ae60;\n}\nul li .btn-highlight {\n  color: #f1c40f;\n}\nul li .btn-edit {\n  color: #2980b9;\n}\nul li .btn-delete {\n  color: #e74c3c;\n}\n/*# sourceMappingURL=home.css.map */\n";
  }
});

// src/app/home/home.ts
var Home;
var init_home3 = __esm({
  "src/app/home/home.ts"() {
    "use strict";
    init_tslib_es6();
    init_home();
    init_home2();
    init_core();
    init_common();
    init_task_services();
    init_notification_service();
    init_task_highlight();
    init_task_edit();
    init_task_stats();
    Home = class Home2 {
      taskService = inject(TaskService);
      notificationService = inject(NotificationService);
      viewContainerRef = inject(ViewContainerRef);
      tasks$ = this.taskService.tasks$;
      stats$ = this.taskService.stats$;
      highlightContainers;
      editingTaskId = null;
      editingTaskTitle = null;
      constructor() {
        this.taskService.tasks$.subscribe({ next: (tasks) => console.log("\u2705 Observable \xE9mis", tasks.length) });
      }
      ngAfterViewInit() {
        this.tasks$.subscribe(() => this.updateHighlights());
      }
      addTask(title) {
        if (title?.trim()) {
          this.taskService.addTask(title.trim());
          this.notificationService.success(`\u2705 T\xE2che "${title}" ajout\xE9e !`);
        }
      }
      deleteTask(id) {
        this.taskService.deleteTask(id);
        this.notificationService.success("\u{1F5D1}\uFE0F T\xE2che supprim\xE9e !");
      }
      toggleComplete(id) {
        this.taskService.toggleComplete(id);
        this.notificationService.success("\u2714\uFE0F \xC9tat de la t\xE2che mis \xE0 jour !");
      }
      toggleHighlight(id) {
        this.taskService.toggleHighlight(id);
      }
      openEditModal(taskId, title) {
        this.editingTaskId = taskId;
        this.editingTaskTitle = title;
      }
      saveTaskEdit(newTitle) {
        if (this.editingTaskId != null) {
          this.taskService.updateTask(this.editingTaskId, newTitle);
          this.notificationService.success("\u270F\uFE0F T\xE2che modifi\xE9e !");
        }
        this.editingTaskId = null;
        this.editingTaskTitle = null;
      }
      cancelTaskEdit() {
        this.editingTaskId = null;
        this.editingTaskTitle = null;
      }
      updateHighlights() {
        if (!this.highlightContainers)
          return;
        this.highlightContainers.forEach((container) => {
          container.clear();
        });
      }
      createHighlightComponent(container, taskTitle) {
        container.clear();
        const componentRef = container.createComponent(TaskHighlightComponent);
        componentRef.instance.title = taskTitle;
      }
      static ctorParameters = () => [];
      static propDecorators = {
        highlightContainers: [{ type: ViewChildren, args: ["highlightContainer", { read: ViewContainerRef }] }]
      };
    };
    Home = __decorate([
      Component({
        selector: "app-home",
        standalone: true,
        imports: [CommonModule, TaskStatsComponent, TaskEditComponent],
        template: home_default,
        styles: [home_default2]
      })
    ], Home);
  }
});

// src/app/home/home.spec.ts
var require_home_spec = __commonJS({
  "src/app/home/home.spec.ts"(exports) {
    init_testing();
    init_home3();
    describe("Home", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [Home]
        }).compileComponents();
        fixture = TestBed.createComponent(Home);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_home_spec();
//# sourceMappingURL=spec-home.spec.js.map

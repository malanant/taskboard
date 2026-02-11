import {
  CommonModule,
  init_common
} from "./chunk-ZGE2EXLE.js";
import {
  Component,
  Input,
  __decorate,
  init_core,
  init_tslib_es6
} from "./chunk-TEVXXR43.js";
import {
  __esm
} from "./chunk-TTULUY32.js";

// angular:jit:style:inline:src\app\shared\components\task-stats\task-stats.ts;CiAgICAuc3RhdHMtY29udGFpbmVyIHsKICAgICAgZGlzcGxheTogZ3JpZDsKICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxMjBweCwgMWZyKSk7CiAgICAgIGdhcDogMTJweDsKICAgICAgbWFyZ2luLXRvcDogMjRweDsKICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDsKICAgIH0KCiAgICAuc3RhdC1jYXJkIHsKICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2VjZjBmMSwgI2Y4ZjlmYSk7CiAgICAgIHBhZGRpbmc6IDE2cHg7CiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDsKICAgICAgYm9yZGVyOiAxcHggc29saWQgI2UwZTZlZDsKICAgICAgdGV4dC1hbGlnbjogY2VudGVyOwogICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlOwoKICAgICAgJjpob3ZlciB7CiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpOwogICAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjEpOwogICAgICB9CgogICAgICAmLnByb2dyZXNzIHsKICAgICAgICBncmlkLWNvbHVtbjogMSAvIC0xOwogICAgICB9CiAgICB9CgogICAgLnN0YXQtdmFsdWUgewogICAgICBmb250LXNpemU6IDI0cHg7CiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkOwogICAgICBjb2xvcjogIzM0OThkYjsKICAgICAgbWFyZ2luLWJvdHRvbTogNnB4OwoKICAgICAgJi5jb21wbGV0ZWQgewogICAgICAgIGNvbG9yOiAjMjdhZTYwOwogICAgICB9CgogICAgICAmLmFjdGl2ZSB7CiAgICAgICAgY29sb3I6ICNmMzljMTI7CiAgICAgIH0KICAgIH0KCiAgICAuc3RhdC1sYWJlbCB7CiAgICAgIGZvbnQtc2l6ZTogMTJweDsKICAgICAgY29sb3I6ICM3ZjhjOGQ7CiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7CiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDsKICAgIH0KCiAgICAucHJvZ3Jlc3MtYmFyIHsKICAgICAgd2lkdGg6IDEwMCU7CiAgICAgIGhlaWdodDogOHB4OwogICAgICBiYWNrZ3JvdW5kOiAjZWNmMGYxOwogICAgICBib3JkZXItcmFkaXVzOiA0cHg7CiAgICAgIG1hcmdpbi10b3A6IDhweDsKICAgICAgb3ZlcmZsb3c6IGhpZGRlbjsKICAgIH0KCiAgICAucHJvZ3Jlc3MtZmlsbCB7CiAgICAgIGhlaWdodDogMTAwJTsKICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMjdhZTYwLCAjMmVjYzcxKTsKICAgICAgYm9yZGVyLXJhZGl1czogNHB4OwogICAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjNzIGVhc2U7CiAgICB9CiAg
var task_stats_default;
var init_task_stats = __esm({
  "angular:jit:style:inline:src\\app\\shared\\components\\task-stats\\task-stats.ts;CiAgICAuc3RhdHMtY29udGFpbmVyIHsKICAgICAgZGlzcGxheTogZ3JpZDsKICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxMjBweCwgMWZyKSk7CiAgICAgIGdhcDogMTJweDsKICAgICAgbWFyZ2luLXRvcDogMjRweDsKICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDsKICAgIH0KCiAgICAuc3RhdC1jYXJkIHsKICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2VjZjBmMSwgI2Y4ZjlmYSk7CiAgICAgIHBhZGRpbmc6IDE2cHg7CiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDsKICAgICAgYm9yZGVyOiAxcHggc29saWQgI2UwZTZlZDsKICAgICAgdGV4dC1hbGlnbjogY2VudGVyOwogICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlOwoKICAgICAgJjpob3ZlciB7CiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpOwogICAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjEpOwogICAgICB9CgogICAgICAmLnByb2dyZXNzIHsKICAgICAgICBncmlkLWNvbHVtbjogMSAvIC0xOwogICAgICB9CiAgICB9CgogICAgLnN0YXQtdmFsdWUgewogICAgICBmb250LXNpemU6IDI0cHg7CiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkOwogICAgICBjb2xvcjogIzM0OThkYjsKICAgICAgbWFyZ2luLWJvdHRvbTogNnB4OwoKICAgICAgJi5jb21wbGV0ZWQgewogICAgICAgIGNvbG9yOiAjMjdhZTYwOwogICAgICB9CgogICAgICAmLmFjdGl2ZSB7CiAgICAgICAgY29sb3I6ICNmMzljMTI7CiAgICAgIH0KICAgIH0KCiAgICAuc3RhdC1sYWJlbCB7CiAgICAgIGZvbnQtc2l6ZTogMTJweDsKICAgICAgY29sb3I6ICM3ZjhjOGQ7CiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7CiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDsKICAgIH0KCiAgICAucHJvZ3Jlc3MtYmFyIHsKICAgICAgd2lkdGg6IDEwMCU7CiAgICAgIGhlaWdodDogOHB4OwogICAgICBiYWNrZ3JvdW5kOiAjZWNmMGYxOwogICAgICBib3JkZXItcmFkaXVzOiA0cHg7CiAgICAgIG1hcmdpbi10b3A6IDhweDsKICAgICAgb3ZlcmZsb3c6IGhpZGRlbjsKICAgIH0KCiAgICAucHJvZ3Jlc3MtZmlsbCB7CiAgICAgIGhlaWdodDogMTAwJTsKICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMjdhZTYwLCAjMmVjYzcxKTsKICAgICAgYm9yZGVyLXJhZGl1czogNHB4OwogICAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjNzIGVhc2U7CiAgICB9CiAg"() {
    task_stats_default = "/* angular:styles/component:scss;86a755e449205c2a9a2434304c231941148ce76ccca552846d313bafb342f7a6;C:\\IPI\\Angular\\ProjetFilRouge\\taskboard-pro\\src\\app\\shared\\components\\task-stats\\task-stats.ts */\n.stats-container {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));\n  gap: 12px;\n  margin-top: 24px;\n  margin-bottom: 24px;\n}\n.stat-card {\n  background:\n    linear-gradient(\n      135deg,\n      #ecf0f1,\n      #f8f9fa);\n  padding: 16px;\n  border-radius: 8px;\n  border: 1px solid #e0e6ed;\n  text-align: center;\n  transition: all 0.3s ease;\n}\n.stat-card:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n}\n.stat-card.progress {\n  grid-column: 1/-1;\n}\n.stat-value {\n  font-size: 24px;\n  font-weight: bold;\n  color: #3498db;\n  margin-bottom: 6px;\n}\n.stat-value.completed {\n  color: #27ae60;\n}\n.stat-value.active {\n  color: #f39c12;\n}\n.stat-label {\n  font-size: 12px;\n  color: #7f8c8d;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.progress-bar {\n  width: 100%;\n  height: 8px;\n  background: #ecf0f1;\n  border-radius: 4px;\n  margin-top: 8px;\n  overflow: hidden;\n}\n.progress-fill {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #27ae60,\n      #2ecc71);\n  border-radius: 4px;\n  transition: width 0.3s ease;\n}\n/*# sourceMappingURL=task-stats.css.map */\n";
  }
});

// src/app/shared/components/task-stats/task-stats.ts
var TaskStatsComponent;
var init_task_stats2 = __esm({
  "src/app/shared/components/task-stats/task-stats.ts"() {
    "use strict";
    init_tslib_es6();
    init_task_stats();
    init_core();
    init_common();
    TaskStatsComponent = class TaskStatsComponent2 {
      stats$;
      static propDecorators = {
        stats$: [{ type: Input }]
      };
    };
    TaskStatsComponent = __decorate([
      Component({
        selector: "app-task-stats",
        standalone: true,
        imports: [CommonModule],
        template: `
    @if (stats$ | async; as stats) {
      <div class="stats-container">
        <div class="stat-card">
          <div class="stat-value">{{ stats.total }}</div>
          <div class="stat-label">Total</div>
        </div>
        <div class="stat-card">
          <div class="stat-value completed">{{ stats.completed }}</div>
          <div class="stat-label">Termin\xE9es</div>
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
        styles: [task_stats_default]
      })
    ], TaskStatsComponent);
  }
});

export {
  TaskStatsComponent,
  init_task_stats2 as init_task_stats
};
//# sourceMappingURL=chunk-PDNQV4BJ.js.map
